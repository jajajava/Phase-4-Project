class EventsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    skip_before_action :authorized, only: [:index, :show]

    def index
        render json: Event.all, status: :ok
    end

    def show
        render json: Event.find(params[:id]), status: :ok
    end


    
    def create
        if current_user.is_admin = true
        event = Event.create!(priv_params)
        render json: event, status: :created
        else 
        render json: {error: "Not authorized"}, status: 401
        end
    end

    def update
        if current_user.is_admin = true
        event = Event.find(params[:id])
        event.update!(params_edit)
        render json: event, status: :ok
        else
        render json: {error: "Not authorized"}, status: 401
        end
    end

    def destroy
        if current_user.is_admin = true
        event = Event.find(params[:id])
        event.destroy
        render json: "Event deleted", status: 201
        else 
        render json: {error: "Not authorized"}, status: 401
        end
    end

# MAKE THE EVENT ACTIONS CREATE UPDATE AND DESTROY ACCESSIBLE ONLY TO ADMINS FROM APPLICATION CONTROLLER

    private

    def priv_params
        params.permit(:name, :date, :time, :is_public, :spots_left, :recurring_days)
    end

    def params_edit
        params.permit(:name, :date, :time, :is_public, :spots_left, :recurring_days)
    end

    def record_invalid (error)
        render json: {error: error.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "Event not found"}, status: 404
    end
end
