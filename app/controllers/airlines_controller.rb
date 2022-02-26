class AirlinesController < ApplicationController

    
    before_create :slugify
    def slugify
        self.slug = name.parameterize   
    end

    def avg_score
        reviews.average(:score).rounc(2).to_f
    end

end
