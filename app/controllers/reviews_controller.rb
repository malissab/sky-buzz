class ReviewsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        review = airline.reviews.new(review_params)

        if review.save
            render json: ReviewSerializer.new(review).serializable_hash.to_json
        else
            render json: { error: review.errors.messages }, status: 422
        end
    end

    def destroy
        review = Review.find(params[:id])

        if review.destroy
            head :no_content
        else
            render json: { error: review.errors.messages }, status: 422
        end
    end

    private

    def airline
        @airline ||= Airline.find(params[:airline_id])
    end

    def review_params
        params.require(:review).permit(:title, :description, :rating, :airline_id)
    end
end
