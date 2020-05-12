class CommentsController < ApplicationController

  # GET /create_comments
  def index
    @comments = Comments.all

    render json: @comments
  end

  # GET /create_comments/1
  def show
    @comment = Comments.find{ || _id == params[comment_params]}
    render json: @comment
  end

  # POST /create_users
  def create
    @comment = Comments.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

   # DELETE /comments/1
   def destroy
    @comment.destroy
  end

  def comment_params
    params.require(:comment).permit(:content, :post_id, :user_id)
  end

end
