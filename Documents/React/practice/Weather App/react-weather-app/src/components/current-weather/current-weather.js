
const CurrentWeather = ({data}) => {
	
	const paramiterRow = 'flex justify-between';
	const paramiterLabel = 'text-left text-sm';
	const paramiterValue = 'text-right text-sm font-bold';
	
	return (
		<div className="weather w-[400px] rounded-lg shadow-lg text-white bg-gray-600 mx-auto my-6 p-4">
			<div className="top flex justify-between items-center pb-4">
				<div>
					<p className="city text-xl font-bold">{data.city}</p>
					<p className="weather-description text-lg">{data.weather[0].description}</p>
				</div>
				<img alt="weather" className="weather-icon w-[100px]" src={`icons/${data.weather[0].icon}.png`} />
			</div>
			
			<div className="bottom flex justify-between items-center">
				<p className="temperature font-bold text-5xl my-4 ">{Math.round(data.main.temp)}°C</p>
				<div className="details w-full pl-20">
					<div className={paramiterRow}>
						<span className={paramiterLabel}>Feels Like</span>
						<span className={paramiterValue}>{Math.round(data.main.feels_like)}°C</span>
					</div>
					
					<div className={paramiterRow}>
						<span className={paramiterLabel}>Wind</span>
						<span className={paramiterValue}>{data.wind.speed}m/s</span>
					</div>
					
					<div className={paramiterRow}>
						<span className={paramiterLabel}>Humidity</span>
						<span className={paramiterValue}>{data.main.humidity}%</span>
					</div>
					
					<div className={paramiterRow}>
						<span className={paramiterLabel}>Pressure</span>
						<span className={paramiterValue}>{data.main.pressure}hPa</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CurrentWeather;