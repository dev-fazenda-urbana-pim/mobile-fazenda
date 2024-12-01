import * as d3 from "d3";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

type LineChartProps = {
  data: number[];
  color: string;
  title: string;
  subtitle: string;
}

const CHAR_ASPECT_RATIO = 9 / 16;

export default function LineChart(props: LineChartProps) {
  const [width, setWidth] = useState(0);

  const height = width * CHAR_ASPECT_RATIO;
  const chartHeight = (height * 2) / 4;

  const min = Math.min(...props.data);
  const max = Math.max(...props.data);

  const yScale = d3.scaleLinear().domain([min, max]).range([chartHeight, 0]);
  const xScale = d3.scaleLinear().domain([0, props.data.length - 1]).range([0, width]);

  const lineFn = d3
    .line<number>()
    .y((d) => yScale(d))
    .x((d, i) => xScale(i))
    .curve(d3.curveCardinal.tension(0.3));

  const svgLine = lineFn(props.data) ?? "";
  const svgArea = lineFn(props.data) ?? "";

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width)}
    >
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height - 12}`}>
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={props.color} stopOpacity={0.7} />
            <Stop offset="100%" stopColor={props.color} stopOpacity={0} />
          </LinearGradient>
        </Defs>

        <Path d={svgLine} stroke={props.color} fill="none" strokeWidth={4} />
        <Path d={svgArea} stroke="none" fill="url(#gradient)" />
      </Svg>

      <View style={styles.footer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1D1F",
    paddingTop: 64,
    position: "relative",
  },
  footer: {
    position: "absolute",
    top: 200,
    left: 24,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },
})
