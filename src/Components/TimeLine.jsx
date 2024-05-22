import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineItems from "../Utils/TimeLineData"

const TimeLine = () => {
  return (
    <VerticalTimeline lineColor="#0077b6" style={{ backgroundColor: '#0077b6' }} >
      {timelineItems.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--${item.position} `}
          date={item.date}
          iconStyle={{ background: '#0077b6', color: '#fff' }}
          icon={item.icon}

        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          {item.subTitle && <h3 className="vertical-timeline-element-title">{item.subTitle}</h3>}
          {item.description && <p>{item.description}</p>}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default TimeLine
