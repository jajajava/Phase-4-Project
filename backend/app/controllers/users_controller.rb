class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    skip_before_action :authorized, only: [:create]


    def create 
        user = User.create!(priv_params)
        @token = encode_token(user_id: user.id)
        render json: {user: UserSerializer.new(user), token: @token}, status: :created
    end

    def me 
        render json: current_user, status: :ok
    end

    def update
        user = User.find(params[:id])
        user.update!(priv_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: "User has been deleted!", status: :ok
    end
# MAKE THE user ACTIONS CREATE AND DESTROY ACCESSIBLE ONLY TO ADMINS

    private

    def priv_params
        params.permit(:username, :password)
    end

    def record_invalid (error)
        render json: {error: error.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "Event not found"}, status: 404
    end
end
