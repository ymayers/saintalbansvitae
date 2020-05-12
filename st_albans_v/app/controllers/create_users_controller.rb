class CreateUsersController < ApplicationController
  before_action :set_create_user, only: [:show, :update, :destroy]
  before_action :authorize_request, except: :create

  # GET /create_users
  def index
    @create_users = CreateUser.all

    render json: @create_users
  end

  # GET /create_users/1
  def show
    render json: @create_user
  end

  # POST /create_users
  def create
    @create_user = CreateUser.new(create_user_params)

    if @create_user.save
      @token = encode({user_id: @create_user.id, username: @create_user.username});
      render json: @create_user, status: :created, location: @create_user
    else
      render json: @create_user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /create_users/1
  def update
    if @create_user.update(create_user_params)
      render json: @create_user
    else
      render json: @create_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /create_users/1
  def destroy
    @create_user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_create_user
      @create_user = CreateUser.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def create_user_params
      params.require(:create_user).permit(:username, :password)
    end
end
