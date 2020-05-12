require 'test_helper'

class CreateUsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @create_user = create_users(:one)
  end

  test "should get index" do
    get create_users_url, as: :json
    assert_response :success
  end

  test "should create create_user" do
    assert_difference('CreateUser.count') do
      post create_users_url, params: { create_user: { password: @create_user.password, username: @create_user.username } }, as: :json
    end

    assert_response 201
  end

  test "should show create_user" do
    get create_user_url(@create_user), as: :json
    assert_response :success
  end

  test "should update create_user" do
    patch create_user_url(@create_user), params: { create_user: { password: @create_user.password, username: @create_user.username } }, as: :json
    assert_response 200
  end

  test "should destroy create_user" do
    assert_difference('CreateUser.count', -1) do
      delete create_user_url(@create_user), as: :json
    end

    assert_response 204
  end
end
