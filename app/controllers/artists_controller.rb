class ArtistsController < ApplicationController
  before_action :set_dashboard
  def index
    @artists = @dashboard.artists
    render component: 'Artists', props: { dashboard: @dashboard, artists: @artists}
  end

  def show
    @artist = @dashboard.artists.find(params[:id])
    render component: 'Artist', props: { dashboard: @dashboard, artist: @artist}
  end 

  def new
    @artist = @dashboard.artists.new
    render component: 'ArtistNew', props: { dashboard: @dashboard, artist: @artist}
  end

  def new
    # @topic = Topic.new
    @artist = @dashboard.artists.new
    render component: 'ArtistNew', props: { dashboard: @dashboard, artist: @artist }
  end

  def edit
    @artist = @dashboard.artists.find(params[:id])
    render component: 'ArtistEdit', props: { dashboard: @dashboard, artist: @artist}
  end

  def create
    @artist = @dashboard.artists.create(artist_params)
    if @artist.save
      redirect_to dashboard_artists_path
    else
      render component: 'ArtistNew', props: { dashboard: @dashboard, artist: @artist}
    end
  end

  def update
    @artist = Artist.find(params[:id])
    if @artist.update(artist_params)
      redirect_to dashboard_artists_path
    else
      render component: 'ArtistEdit', props: {dashboard: @dashboard, artist: @artist}
    end
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect_to dashboard_artists_path
  end


  private
  def set_dashboard
    @dashboard = Dashboard.find(params[:dashboard_id])
  end

  def artist_params
    params.require(:artist).permit( :name, :rank, :description, :image)
  end
end
