require 'json'

get "/" do
  redirect to '/bunnies'
end

get "/bunnies" do
  @cuties = FuzzyBunny.all
  erb :"bunnies/index", layout: !request.xhr?
end

get "/bunnies/new" do
  erb :"bunnies/new", layout: !request.xhr?
end

post '/bunnies' do
  bunny = FuzzyBunny.create(params)
  if request.xhr?
    return bunny.to_json
  else
    redirect to "/bunnies/#{bunny.id}"
  end
end

get "/bunnies/:id" do
  bunny
  erb :"bunnies/show", layout: !request.xhr?
end

get '/bunnies/:id/edit' do
  bunny
  erb :"bunnies/edit", :layout => !request.xhr?
end

put '/bunnies/:id' do
  bunny.update(params)
  if request.xhr?
    return bunny.to_json
  else
    redirect to "/bunnies/#{bunny.id}"
  end
end

get '/bunnies/:id/delete' do
  bunny.destroy
  if request.xhr?
    status 200
  else
    redirect to "/bunnies"
  end
end

private

def bunny
  @bunny ||= FuzzyBunny.find(params[:id])
end