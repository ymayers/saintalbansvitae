class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @create_user = CreatUser.find_by_username(login_params[:username])
    if @create_user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(user_id: @create_user.id, username: @create_user.username)
      render json: { user: @create_user, token: token }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end

  # GET /auth/verify
  def verify
    render json: @current_create_user, status: :ok
  end


  private


  def login_params
    params.require(:auth).permit(:username, :password)
  end
end
