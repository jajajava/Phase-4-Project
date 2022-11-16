class ReservationsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def show
        render json: Reservation.find(params[:id]), status: :ok
    end

    def create
        already_exists = current_user.events.find_by(id: params[:event_id])
        if !already_exists
        reservation = Reservation.create!(priv_params)
        render json: reservation, status: :created
        else
        render json: {error: "Your spot is already reserved!"}, status: 422
        end
    end

    def destroy
        reservation = Reservation.find_by(event_id: params[:id])
        user = reservation.user
        if current_user.id == reservation.user.id || current_user.is_admin
        reservation.destroy
        render json: "Reservation deleted", status: 201
        else
        render json: "This is not your reservation!", status: 422
        end
    end

    private

    def priv_params
        params.permit(:user_id, :event_id)
    end

    def record_invalid (error)
        render json: {error: error.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "Event not found"}, status: 404
    end
end
