class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: :comments, status: :ok
  end

  # GET /posts/1
  def show
    render json: @post, include: :comments, status: :ok
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post, include: :comments, status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  # def add_comment
  #   @comment = Comment.new(post_id: params[:post_id])
  #   # @comment = Comment.find(params[:comment_id])
  #   @post.comments << @comment
  #   render json: @post, include: :comments
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:content, :image_url).merge(user_id @current_user.id)
    end
end
