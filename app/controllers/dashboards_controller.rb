class DashboardsController < ApplicationController
  def index
    @dashboards = Dashboard.all
    render component: 'Dashboards', props: { dashboards: @dashboards}
  end

  def show
    @dashboard = Dashboard.find(params[:id])
    render component: 'Dashboard', props: {dashboard: @dashboard}
  end

  def new
    @dashboard = Dashboard.new
    render component: 'DashboardNew', props: { dashboard: @dashboard}
  end

  def create
    @dashboard = Dashboard.new(dashboard_params)
    if @dashboard.save
      redirect_to dashboards_path
    else
      render component: 'DashboardNew', props: { dashboard: @dashboard}
    end
  end

  def edit
    @dashboard = Dashboard.find(params[:id])
    render component: 'DashboardEdit', props: { dashboard: @dashboard}
  end

  def update
    @dashboard = Dashboard.find(params[:id])
    if @dashboard.update(dashboard_params)
      redirect_to dashboards_path
    else
      render component: "DashboardEdit", props: {dashboard: @dashboard}
    end
  end

  def destroy
    @dashboard = Dashboard.find(params[:id])
    @dashboard.destroy
    redirect_to dashboards_path
  end


  private
  def dashboard_params
    params.require(:dashboard).permit(:name, :description)
  end
end
