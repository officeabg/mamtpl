import { ApexOptions } from 'apexcharts';
interface spark3 {
    options?: ApexOptions,
    width?: number;
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]:any
    label?: XAxisAnnotations
    color?: string | string[] | (string & string[]) | undefined
    endingShape?: string
    enabled?: boolean;
  }

  //// Podcastactivity
export const Podcastactivity: spark3= {
    series: [{
        name: 'Hours',
        data: [40, 35, 66, 28, 38, 55, 45]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart:any) => {
                    chart.windowResizeHandler();
                }
            },
            height: 206,
            fontFamily: 'Poppins, Arial, sans-serif',
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        grid: {
            show: false,
            borderColor: '#f2f6f7',
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'top',
            fontSize: '13px',
        },
        colors: ["var(--primary08)"],
        stroke: {
            width: [1],
            curve: 'straight',
        },
        plotOptions: {
            bar: {
                columnWidth: "30%",
                borderRadius: 3,
				colors: {
					ranges: [{
						from: 41,
						to: 100,
						color: 'rgba(215, 124, 247, 0.8)'
					}, {
						from: 0,
						to: 40,
						color: 'var(--primary08)'
					}]
				},
            }
        },
        tooltip: {
          enabled: true,
          theme: "dark",
        },
        labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  }
}