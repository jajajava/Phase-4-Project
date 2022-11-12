class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    skip_before_action :authorized, only: [:create]


    def index
        render json: User.all, status: :ok
    end

    def show
        render json: User.find(params[:id]), status: :ok
    end

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
# Might need to do separation of concerns and split up the update for every thing I want to update
# How do I update the user to admin though? Maybe if I only allow the admin account make that edit in the separated route?

    def destroy
        user = User.find(params[:id])
        user.destroy
    end
# MAKE THE user ACTIONS CREATE AND DESTROY ACCESSIBLE ONLY TO ADMINS

    private

    def priv_params
        params.permit(:username, :password, :age)
    end

    def record_invalid (error)
        render json: {error: error.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "Event not found"}, status: 404
    end
end