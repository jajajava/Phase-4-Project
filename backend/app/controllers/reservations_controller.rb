class ReservationsController < ApplicationController

    def show
        render json: Reservation.find(params[:id])
    end

    def create
        reservation = Reservation.create!(priv_params)
        render json: reservation, status: :created
    end

    def destroy
        reservation = Reservation.find(params[:id])
        reservation.destroy
        render json: "Reservation deleted", status: 201
    end

    private

    def priv_params
        params.permit(:user_id, :event_id)
    end
end
