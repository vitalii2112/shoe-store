Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "shoe-shop.fun"

    resource "*",
             headers: :any,
             methods: [:get, :post, :put, :patch, :delete, :options, :head],
             expose: [:Authorization]
  end
end
