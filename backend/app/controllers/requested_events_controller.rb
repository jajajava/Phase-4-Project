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
        requested = RequestedEvent.create!(priv_params)
    end

    def update
        event = Event.find(params[:id])
        event.update!(priv_params)
        render json: event, status: :ok
    end

    def destroy
        if current_user != {}
        event = Event.find(params[:id])
        event.destroy
        render json: "Event deleted", status: 201
        else 
        render json: {error: "Not authorized"}, status: 401
        end
    end

    private

    def priv_params
        params.permit(:name, :date, :start_time, :end_time, :is_public, :spots_left, :description)
    end

    def record_invalid (error)
        render json: {error: error.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "Event not found"}, status: 404
    end

end


