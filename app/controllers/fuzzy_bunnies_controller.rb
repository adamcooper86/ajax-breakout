get "/" do
  redirect to '/bunnies'
end

get "/bunnies" do
  @cuties = FuzzyBunny.all
  erb :"bunnies/index"
end

get "/bunnies/new" do
  erb :"bunnies/new"
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
  erb :"bunnies/show", layout: false
end

get '/bunnies/:id/edit' do
  bunny
  erb :"bunnies/edit"
end

put '/bunnies/:id' do
  bunny.update(params)
  redirect to "/bunnies/#{bunny.id}"
end

get '/bunnies/:id/delete' do
  bunny.destroy
  redirect to "/bunnies"
end

private

def bunny
  @bunny ||= FuzzyBunny.find(params[:id])
end