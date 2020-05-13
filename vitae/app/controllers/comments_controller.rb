class CommentsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  # before_action :authorize_request

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @commentt.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @comment.destroy
  end

  # def add_comment
  #   @comment = Comment.find(params[:comment_id])
  #   @post.comments << @comment
  #   render json: @post, include: :comments
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content, :post_id, :user_id)
    end
end
