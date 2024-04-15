'use client';
import { ResponsiveLine } from '@nivo/line'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const MyResponsiveLine = ({ data }: any) => {
     return <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 20, bottom: 30, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}  
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
    />
}

export default function Lines (){
   const data =  [
        {
          "id": "japan",
          "color": "hsl(96, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 103
            },
            {
              "x": "helicopter",
              "y": 252
            },
            {
              "x": "boat",
              "y": 110
            },
            {
              "x": "train",
              "y": 234
            },
            {
              "x": "subway",
              "y": 285
            },
            {
              "x": "bus",
              "y": 275
            },
            {
              "x": "car",
              "y": 295
            },
            {
              "x": "moto",
              "y": 246
            },
            {
              "x": "bicycle",
              "y": 194
            },
            {
              "x": "horse",
              "y": 126
            },
            {
              "x": "skateboard",
              "y": 6
            },
            {
              "x": "others",
              "y": 26
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(333, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 73
            },
            {
              "x": "helicopter",
              "y": 20
            },
            {
              "x": "boat",
              "y": 78
            },
            {
              "x": "train",
              "y": 269
            },
            {
              "x": "subway",
              "y": 130
            },
            {
              "x": "bus",
              "y": 23
            },
            {
              "x": "car",
              "y": 16
            },
            {
              "x": "moto",
              "y": 64
            },
            {
              "x": "bicycle",
              "y": 107
            },
            {
              "x": "horse",
              "y": 66
            },
            {
              "x": "skateboard",
              "y": 49
            },
            {
              "x": "others",
              "y": 232
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(196, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 127
            },
            {
              "x": "helicopter",
              "y": 189
            },
            {
              "x": "boat",
              "y": 132
            },
            {
              "x": "train",
              "y": 186
            },
            {
              "x": "subway",
              "y": 260
            },
            {
              "x": "bus",
              "y": 269
            },
            {
              "x": "car",
              "y": 173
            },
            {
              "x": "moto",
              "y": 172
            },
            {
              "x": "bicycle",
              "y": 196
            },
            {
              "x": "horse",
              "y": 237
            },
            {
              "x": "skateboard",
              "y": 116
            },
            {
              "x": "others",
              "y": 230
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(70, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 24
            },
            {
              "x": "helicopter",
              "y": 239
            },
            {
              "x": "boat",
              "y": 127
            },
            {
              "x": "train",
              "y": 146
            },
            {
              "x": "subway",
              "y": 291
            },
            {
              "x": "bus",
              "y": 297
            },
            {
              "x": "car",
              "y": 34
            },
            {
              "x": "moto",
              "y": 196
            },
            {
              "x": "bicycle",
              "y": 89
            },
            {
              "x": "horse",
              "y": 294
            },
            {
              "x": "skateboard",
              "y": 52
            },
            {
              "x": "others",
              "y": 59
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(19, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 81
            },
            {
              "x": "helicopter",
              "y": 207
            },
            {
              "x": "boat",
              "y": 289
            },
            {
              "x": "train",
              "y": 90
            },
            {
              "x": "subway",
              "y": 272
            },
            {
              "x": "bus",
              "y": 219
            },
            {
              "x": "car",
              "y": 50
            },
            {
              "x": "moto",
              "y": 275
            },
            {
              "x": "bicycle",
              "y": 23
            },
            {
              "x": "horse",
              "y": 81
            },
            {
              "x": "skateboard",
              "y": 157
            },
            {
              "x": "others",
              "y": 98
            }
          ]
        }
      ]
    return  <Card className="w-full">
    <CardHeader className="p-4 pb-0">
      <CardTitle>Lines</CardTitle>
      <CardDescription>These are the stats of the year.</CardDescription>
    </CardHeader>
    <CardContent className="flex p-0 items-center h-[264px] w-full">
        <MyResponsiveLine data={data} />
    </CardContent>
</Card>
}