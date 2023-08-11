import { Accordion, AccordionItemHeading, AccordionItemPanel, AccordionItem, AccordionItemButton } from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
	const dayInAWeek = new Date().getDay();
	const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
		WEEK_DAYS.slice(0, dayInAWeek)
	);
	
	const dailyDetailsItem = 'flex items-center h-[30px] justify-between';
	const itemValue= 'font-bold';
	
	const preExpandedItems = [0];

	return (
		<>
			<label className="title text-2xl font-bold">Daily</label>
			<Accordion preExpanded={preExpandedItems} allowZeroExpanded={true}>
				{data.list.slice(0, 7).map((item, index) => (
					
					<AccordionItem key={index}>
						<AccordionItemHeading>
							<AccordionItemButton className="">
								<div className="daily-item bg-white cursor-pointer rounded-lg h-[40px] my-4 flex items-center text-lg py-3 px-10">
									<img alt="weather" className="icon-small w-[40px]" src={`icons/${item.weather[0].icon}.png`} />
									<label className="day text-blue-900 flex-1">{forecastDays[index]}</label>
									<label className="description flex-1 text-right mr-20">{item.weather[0].description}</label>
									<label className="min-max text-grayscaley-400 font-bold">
										{Math.round(item.main.temp_min)}°C /{" "} 
										{Math.round(item.main.temp_max)}°C
									</label>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="daily-details-grid grid flex-1 grid-cols-auto px-10 py-2">
								<div className={dailyDetailsItem}>
									<label>Pressure:</label>
									<label className={itemValue}>{item.main.pressure}hPa</label>
								</div>
								
								<div className={dailyDetailsItem}>
									<label>Humidity:</label>
									<label className={itemValue}>{item.main.humidity}%</label>
								</div>
								
								<div className={dailyDetailsItem}>
									<label>Clouds:</label>
									<label className={itemValue}>{item.clouds.all}%</label>
								</div>
								
								<div className={dailyDetailsItem}>
									<label>Wind Speed:</label>
									<label className={itemValue}>{item.wind.speed}m/s</label>
								</div>
								
								<div className={dailyDetailsItem}>
									<label>Sea Level:</label>
									<label className={itemValue}>{item.main.sea_level}m</label>
								</div>
								
								<div className={dailyDetailsItem}>
									<label>Feels Like:</label>
									<label className={itemValue}>{Math.round(item.main.feels_like)}°C</label>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
				
			</Accordion>
		</>
	);
}

export default Forecast;