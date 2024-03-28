import { useLoaderData } from "react-router-dom";
import { localStorageCheck } from "../Utility/LocalStorage";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const PagesToRead = () => {

    const [chart, setChart] = useState([])

    const isLoaderData = useLoaderData()

    useEffect(() => {
        const localStorage = localStorageCheck()
        const storageChecker = isLoaderData.filter(cId => localStorage.includes(cId.id))
        setChart(storageChecker)

    }, [])



    console.log(chart)

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <div className="flex flex-col justify-center items-center lg:h-[80vh] h-[40vh]">

            <ResponsiveContainer>
                <BarChart
                    width={1200}
                    height={400}
                    data={chart}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {chart.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;