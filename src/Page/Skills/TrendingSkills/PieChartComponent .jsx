
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import PropTypes from "prop-types";

const PieChartComponent  = ({categoryData}) => {
        const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#00CFFF"];
        const RADIAN = Math.PI / 180;
    
        const renderCustomizedLabel = ({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                percent,
              }) => {
                const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
              
                return (
                  <text
                    x={x}
                    y={y}
                    fill="white"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {`${(percent * 100).toFixed(0)}%`}
                  </text>
                );
              };
const renderCustomizedLabelLine = ({ cx, cy, midAngle, outerRadius, index }) => {
  const radius = outerRadius + 20; 
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  return (
    <text
      x={x}
      y={y}
      fill="#8884d8"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {categoryData[index].category}
    </text>
  );
};
        
      const baseRadius=100;
      const dynamicRadius=baseRadius+categoryData.length*15;

        return (
                <PieChart width={500} height={500}>
      <Pie
        data={categoryData}
        cx={200}
        cy={200}
        label={renderCustomizedLabel}
        labelLine={renderCustomizedLabelLine} 
        outerRadius={150} // Use dynamic outer radius
        fill="#8884d8"
        dataKey="count"
      >
        {categoryData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <div className="mt-5"><Tooltip /></div>
     <div className="mt-2"> </div>
     <Legend />
    </PieChart>
  );
        
};
PieChartComponent.propTypes={
        categoryData:PropTypes.array,
}
export default PieChartComponent ;