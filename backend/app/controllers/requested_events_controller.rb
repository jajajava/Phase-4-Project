class RequestedEventsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        requested = RequestedEvent.all
        render json: requested, status: :ok
    end

    def show
        requested = RequestedEvent.find(params[:id])
        render json: requested, status: :ok
    end

    def create
        if !current_user.is_admin
        requested = RequestedEvent.create!(priv_params)
        render json: requested, status: :created
        elsif current_user.is_admin
        render json: {error: "Only non-admins can create event requests"}, status: 401
        end
    end

    def update
        requested = RequestedEvent.find(params[:id])
        requested.update!(priv_params)
        render json: requested, status: :ok
    end

    def destroy
        requestedevent = RequestedEvent.find(params[:id])
        if current_user.id === requestedevent.user.id
        requestedevent.destroy
        render json: "Requested event deleted", status: 201
        elsif current_user.is_admin
        requestedevent.destroy
        render json: "Requested event deleted", status: 201
        else
        render json: {error: "Not authorized"}, status: 401
        end
    end

    private

    def priv_params
        params.permit(:name, :date, :start_time, :end_time, :is_public, :spots_left, :description, :user_id)
    end

    def record_invalid (error)
        render json: {error: error.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "Requested event not found"}, status: 404
    end

end


