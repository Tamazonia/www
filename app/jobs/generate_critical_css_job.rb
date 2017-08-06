class GenerateCriticalCssJob
  include Sidekiq::Worker
  sidekiq_options queue: :default,
                  unique: :until_executing,
                  unique_args: :unique_args

  def perform(route)
    return if route.nil? || CriticalPathCss.fetch(route).empty?
    CriticalPathCss.generate route
  end

  def self.unique_args(args)
    args.first # route
  end
end