import { Inject, ScheduleComponent, Day, Week, Month, WorkWeek,
    Agenda, ResourcesDirective, ResourceDirective  } from '@syncfusion/ej2-react-schedule';

export default class App extends React.Component<{}, {}> {
    private localData = [
      {
        Id:1,
        Subject: 'Skarting',
        StartTime: new Date(2019, 4, 8, 6, 0),
        EndTime: new Date(2019, 4, 8, 7, 0)
      },
      {
        Id:2,
        Subject: 'Swimming',
        StartTime: new Date(2019, 4, 9, 7, 30),
        EndTime: new Date(2019, 4, 9, 8, 30)
      },
      {
        Id:3,
        Subject: 'Table Tennis',
        StartTime: new Date(2019, 4, 10, 9, 0),
        EndTime: new Date(2019, 4, 10, 10, 0)
    }];

    public render {
        return (<ScheduleComponent height = '550px' selectedDate={new }></ScheduleComponent>)
    }
}