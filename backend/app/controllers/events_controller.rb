class EventsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    def index
        render json: Event.all, status: :ok
    end

    def show
        render json: Event.find(params[:id]), status: :ok
    end

    def create
        event = Event.create!(priv_params)
        render json: {event}, status: :created
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
    end
# MAKE THE EVENT ACTIONS CREATE AND DESTROY ACCESSIBLE ONLY TO ADMINS

    private

    def priv_params
        params.permit(:name, :date, :time, :is_public, :recurring_days)
    end

    def record_invalid (error)
        render json: {error: error.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "Event not found"}, status: 404
    end
end
