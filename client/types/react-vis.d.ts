export class AbstractSeries {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  setState(partialState: any, callback: any): void;
}
export namespace AbstractSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class ArcSeries {
  static defaultProps: {
    arcClassName: string;
    center: {
      x: number;
      y: number;
    };
    className: string;
    padAngle: number;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(props: any);
  componentWillReceiveProps(nextProps: any): void;
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace ArcSeries {
  namespace propTypes {
    function angleBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace angleBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function angleDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace angleDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function angleDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace angleDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function angleRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace angleRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function angleType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace angleType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function arcClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace arcClassName {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function center(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace center {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getAngle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getAngle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getAngle0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getAngle0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getRadius(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getRadius {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getRadius0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getRadius0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function padAngle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace padAngle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function radiusBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace radiusBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function radiusDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace radiusDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function radiusDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace radiusDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function radiusRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace radiusRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function radiusType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace radiusType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class AreaSeries {
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace AreaSeries {
  namespace defaultProps {
    const className: string;
    function getNull(): any;
    const stack: boolean;
    const style: {};
  }
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getNull(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getNull {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export namespace AxisUtils {
  const DIRECTION: {
    HORIZONTAL: string;
    VERTICAL: string;
  };
  const ORIENTATION: {
    BOTTOM: string;
    HORIZONTAL: string;
    LEFT: string;
    RIGHT: string;
    TOP: string;
    VERTICAL: string;
  };
  function getTickValues(scale: any, tickTotal: any, tickValues: any): any;
  function getTicksTotalFromSize(size: any): any;
}
export function Borders(props: any): any;
export namespace Borders {
  const defaultProps: {
    className: string;
    style: {
      all: {};
      bottom: {};
      left: {};
      right: {};
      top: {};
    };
  };
  const displayName: string;
  namespace propTypes {
    function innerHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerHeight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginBottom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginBottom {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginLeft(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginLeft {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginRight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginRight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginTop {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
  const requiresSVG: boolean;
}
export class CircularGridLines {
  static defaultProps: {
    centerX: number;
    centerY: number;
  };
  static displayName: string;
  static requiresSVG: boolean;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace CircularGridLines {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function centerX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace centerX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function centerY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace centerY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerHeight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace left {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginBottom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginBottom {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginLeft(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginLeft {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginRight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginRight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginTop {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function rRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace rRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickTotal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickTotal {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickValues(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickValues {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace top {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export function ContinuousColorLegend(_ref: any): any;
export namespace ContinuousColorLegend {
  const defaultProps: {
    className: string;
    endColor: string;
    startColor: string;
  };
  const displayName: string;
  namespace propTypes {
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function endColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace endColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function endTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function midColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace midColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function midTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace midTitle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function startColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace startColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function startTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export function ContinuousSizeLegend(_ref: any): any;
export namespace ContinuousSizeLegend {
  const defaultProps: {
    circlesTotal: number;
    className: string;
    endSize: number;
    startSize: number;
  };
  const displayName: string;
  namespace propTypes {
    function circlesTotal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace circlesTotal {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function endSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace endSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function endTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function startSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace startSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function startTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class ContourSeries {
  static defaultProps: {
    bandwidth: number;
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace ContourSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function bandwidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace bandwidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginLeft(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginLeft {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginTop {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class Crosshair {
  static defaultProps: any;
  static displayName: string;
  static propTypes: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export class CustomSVGSeries {
  static defaultProps: {
    animation: boolean;
    className: string;
    customComponent: string;
    size: number;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace CustomSVGSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function customComponent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace customComponent {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function marginLeft(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginLeft {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginTop {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function size(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace size {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class DecorativeAxis {
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace DecorativeAxis {
  namespace defaultProps {
    const className: string;
    const numberOfTicks: number;
    const style: {
      line: {
        strokeWidth: any;
      };
      text: {};
      ticks: {
        strokeWidth: any;
      };
    };
    const tickSize: number;
    function tickValue(d: any): any;
  }
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function axisDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function axisEnd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function axisStart(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function numberOfTicks(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace numberOfTicks {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export function DiscreteColorLegend(_ref: any): any;
export namespace DiscreteColorLegend {
  const defaultProps: {
    className: string;
    colors: string[];
    orientation: string;
  };
  const displayName: string;
  namespace propTypes {
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function items(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function onItemClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onItemClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onItemMouseEnter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onItemMouseEnter {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onItemMouseLeave(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onItemMouseLeave {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function orientation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace orientation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export const FlexibleHeightXYPlot: any;
export const FlexibleWidthXYPlot: any;
export const FlexibleXYPlot: any;
export function GradientDefs(props: any): any;
export namespace GradientDefs {
  const defaultProps: {
    className: string;
  };
  const displayName: string;
  namespace propTypes {
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
  const requiresSVG: boolean;
}
export class GridLines {
  static defaultProps: {
    direction: string;
  };
  static displayName: string;
  static requiresSVG: boolean;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace GridLines {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function attr(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function direction(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace direction {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerHeight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace left {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginBottom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginBottom {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginLeft(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginLeft {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginRight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginRight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginTop {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickTotal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickTotal {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickValues(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickValues {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace top {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class HeatmapSeries {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(attr: any): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace HeatmapSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class HexbinSeries {
  static defaultProps: {
    colorRange: string[];
    radius: number;
    xOffset: number;
    yOffset: number;
  };
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace HexbinSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function radius(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace radius {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class Highlight {
  static defaultProps: {
    className: string;
    color: string;
    enableX: boolean;
    enableY: boolean;
    opacity: number;
  };
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onBrush(e: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
  startBrushing(e: any): void;
  stopBrushing(e: any): void;
}
export namespace Highlight {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function enableX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace enableX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function enableY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace enableY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function highlightHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace highlightHeight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function highlightWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace highlightWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function highlightX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace highlightX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function highlightY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace highlightY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onBrush(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onBrush {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onBrushEnd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onBrushEnd {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onBrushStart(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onBrushStart {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onDrag(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onDrag {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onDragEnd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onDragEnd {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onDragStart(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onDragStart {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class Hint {
  static ALIGN: {
    AUTO: string;
    BOTTOM: string;
    BOTTOM_EDGE: string;
    LEFT: string;
    LEFT_EDGE: string;
    RIGHT: string;
    RIGHT_EDGE: string;
    TOP: string;
    TOP_EDGE: string;
  };
  static ORIENTATION: {
    BOTTOM_LEFT: string;
    BOTTOM_RIGHT: string;
    TOP_LEFT: string;
    TOP_RIGHT: string;
  };
  static defaultProps: any;
  static displayName: string;
  static propTypes: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export class HorizontalBarSeries {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(attr: any): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace HorizontalBarSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class HorizontalBarSeriesCanvas {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(attr: any): any;
  static isCanvas: any;
  static renderLayer(props: any, ctx: any): void;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace HorizontalBarSeriesCanvas {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export function HorizontalGridLines(props: any): any;
export namespace HorizontalGridLines {
  const defaultProps: {
    attr: string;
    direction: string;
  };
  const displayName: string;
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function attr(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function direction(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace direction {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerHeight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace left {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginBottom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginBottom {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginLeft(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginLeft {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginRight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginRight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginTop {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickTotal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickTotal {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickValues(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickValues {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace top {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
  const requiresSVG: boolean;
}
export class HorizontalRectSeries {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(attr: any): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace HorizontalRectSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class HorizontalRectSeriesCanvas {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(attr: any): any;
  static isCanvas: any;
  static renderLayer(props: any, ctx: any): void;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace HorizontalRectSeriesCanvas {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class LabelSeries {
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace LabelSeries {
  namespace defaultProps {
    const animation: boolean;
    const className: string;
    function getLabel(d: any): any;
    const rotation: number;
    const stack: boolean;
    const style: {};
  }
  namespace propTypes {
    function allowOffsetToBeReversed(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace allowOffsetToBeReversed {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function labelAnchorX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace labelAnchorX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function labelAnchorY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace labelAnchorY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginLeft(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginLeft {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginTop {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function rotation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace rotation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class LineMarkSeries {
  static defaultProps: any;
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace LineMarkSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function curve(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace curve {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getNull(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getNull {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function lineStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace lineStyle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function markStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace markStyle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function strokeStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace strokeStyle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class LineMarkSeriesCanvas {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(): any;
  static isCanvas: any;
  static renderLayer(props: any, ctx: any): void;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace LineMarkSeriesCanvas {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class LineSeries {
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace LineSeries {
  namespace defaultProps {
    const className: string;
    const curve: {};
    function getNull(): any;
    const opacity: number;
    const stack: boolean;
    const strokeStyle: string;
    const style: {};
  }
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function curve(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace curve {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getNull(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getNull {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function strokeStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace strokeStyle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class LineSeriesCanvas {
  static defaultProps: {
    className: string;
    stack: boolean;
    strokeWidth: number;
    style: {};
  };
  static displayName: string;
  static getParentConfig(): any;
  static isCanvas: any;
  static renderLayer(props: any, ctx: any): void;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace LineSeriesCanvas {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function strokeWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace strokeWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class MarkSeries {
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace MarkSeries {
  namespace defaultProps {
    function getNull(): any;
  }
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getNull(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getNull {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function strokeWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace strokeWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class MarkSeriesCanvas {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(): any;
  static isCanvas: any;
  static renderLayer(props: any, ctx: any): void;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace MarkSeriesCanvas {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class ParallelCoordinates {
  static displayName: string;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace ParallelCoordinates {
  namespace defaultProps {
    const className: string;
    const colorRange: string[];
    const colorType: string;
    const style: {
      axes: {
        line: any;
        text: any;
        ticks: any;
      };
      deselectedLineStyle: {
        strokeOpacity: any;
      };
      labels: {
        fontSize: any;
        textAnchor: any;
      };
      lines: {
        strokeOpacity: any;
        strokeWidth: any;
      };
    };
    function tickFormat(value: any): any;
  }
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function brushing(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace brushing {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function domains(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function margin(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace margin {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function showMarks(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace showMarks {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickFormat(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickFormat {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
}
export class PolygonSeries {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(): any;
  static propTypes: any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export function RadarChart(props: any): any;
export namespace RadarChart {
  namespace defaultProps {
    const className: string;
    const colorRange: string[];
    const colorType: string;
    const hideInnerMostValues: boolean;
    const renderAxesOverPolygons: boolean;
    const startingAngle: number;
    const style: {
      axes: {
        line: any;
        text: any;
        ticks: any;
      };
      labels: {
        fontSize: any;
        textAnchor: any;
      };
      polygons: {
        fillOpacity: any;
        strokeOpacity: any;
        strokeWidth: any;
      };
    };
    function tickFormat(value: any): any;
  }
  const displayName: string;
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function domains(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function hideInnerMostValues(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace hideInnerMostValues {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function margin(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace margin {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function renderAxesOverPolygons(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace renderAxesOverPolygons {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function startingAngle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace startingAngle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickFormat(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickFormat {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
}
export function RadialChart(props: any): any;
export namespace RadialChart {
  namespace defaultProps {
    const className: string;
    const colorRange: string[];
    const colorType: string;
    function getAngle(d: any): any;
    function getAngle0(d: any): any;
    function getLabel(d: any): any;
    function getRadius(d: any): any;
    function getRadius0(d: any): any;
    function getSubLabel(d: any): any;
    const padAngle: number;
  }
  const displayName: string;
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function getAngle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getAngle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getAngle0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getAngle0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getLabel {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getRadius(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getRadius {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getRadius0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getRadius0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function labelsAboveChildren(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace labelsAboveChildren {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function labelsStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace labelsStyle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function margin(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace margin {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function padAngle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace padAngle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function showLabels(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace showLabels {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function subLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace subLabel {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
}
export class RectSeries {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(): any;
  static propTypes: any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export class RectSeriesCanvas {
  static displayName: string;
  static getParentConfig(): any;
  static isCanvas: any;
  static renderLayer(props: any, ctx: any): void;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace RectSeriesCanvas {
  namespace defaultProps {
    const className: string;
    function linePosAttr(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function lineSizeAttr(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    const stack: boolean;
    const style: {};
    function valuePosAttr(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function valueSizeAttr(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export function Sankey(props: any): any;
export namespace Sankey {
  namespace defaultProps {
    const align: string;
    const className: string;
    const hasVoronoi: boolean;
    const hideLabels: boolean;
    const labelRotation: number;
    const layout: number;
    const margin: {
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    const nodePadding: number;
    const nodeWidth: number;
    function onLinkClick(f: any): any;
    function onLinkMouseOut(f: any): any;
    function onLinkMouseOver(f: any): any;
    function onValueClick(f: any): any;
    function onValueMouseOut(f: any): any;
    function onValueMouseOver(f: any): any;
    const style: {
      labels: {};
      links: {};
      rects: {};
    };
  }
  namespace propTypes {
    function align(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace align {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function hasVoronoi(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace hasVoronoi {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function hideLabels(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace hideLabels {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function labelRotation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace labelRotation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function layout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace layout {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function links(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function margin(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace margin {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function nodePadding(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace nodePadding {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function nodeWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace nodeWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function nodes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function onLinkClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onLinkClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onLinkMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onLinkMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onLinkMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onLinkMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
}
export namespace ScaleUtils {
  function extractScalePropsFromProps(props: any, attributes: any): any;
  function getAttr0Functor(props: any, attr: any): any;
  function getAttributeFunctor(props: any, attr: any): any;
  function getAttributeScale(props: any, attr: any): any;
  function getAttributeValue(props: any, attr: any): any;
  function getDomainByAccessor(allData: any, accessor: any, accessor0: any, type: any): any;
  function getFontColorFromBackground(background: any): any;
  function getMissingScaleProps(props: any, data: any, attributes: any): any;
  function getOptionalScaleProps(props: any): any;
  function getScaleObjectFromProps(props: any, attr: any): any;
  function getScalePropTypesByAttribute(attr: any): any;
  function getXYPlotValues(props: any, children: any): any;
  function literalScale(defaultValue: any): any;
}
export function SearchableDiscreteColorLegend(props: any): any;
export namespace SearchableDiscreteColorLegend {
  namespace defaultProps {
    const className: string;
    function searchFn(items: any, s: any): any;
    const searchText: string;
  }
  const displayName: string;
  namespace propTypes {
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function items(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function onItemClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onItemClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onItemMouseEnter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onItemMouseEnter {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onItemMouseLeave(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onItemMouseLeave {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSearchChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSearchChange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function orientation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace orientation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function searchFn(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace searchFn {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function searchPlaceholder(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace searchPlaceholder {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function searchText(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace searchText {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export function Sunburst(props: any): any;
export namespace Sunburst {
  namespace defaultProps {
    const className: string;
    const colorType: string;
    function getAngle(d: any): any;
    function getAngle0(d: any): any;
    function getColor(d: any): any;
    function getLabel(d: any): any;
    function getSize(d: any): any;
    const hideRootNode: boolean;
    const padAngle: number;
  }
  const displayName: string;
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function getAngle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getAngle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getAngle0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getAngle0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getLabel {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function hideRootNode(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace hideRootNode {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function padAngle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace padAngle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
}
export class Treemap {
  static displayName: string;
  constructor(props: any);
  componentWillReceiveProps(props: any): void;
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace Treemap {
  namespace defaultProps {
    const className: string;
    const colorRange: string[];
    const data: {
      children: any[];
    };
    function getColor(d: any): any;
    function getLabel(d: any): any;
    function getSize(d: any): any;
    const hideRootNode: boolean;
    const margin: {
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    const mode: string;
    function onLeafClick(d: any): any;
    function onLeafMouseOut(d: any): any;
    function onLeafMouseOver(d: any): any;
    const opacityType: string;
    const padding: number;
    function sortFunction(a: any, b: any, accessor: any): any;
  }
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function hideRootNode(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace hideRootNode {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function margin(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace margin {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function mode(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace mode {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onLeafClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onLeafClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onLeafMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onLeafMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onLeafMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onLeafMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function padding(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function sortFunction(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sortFunction {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function useCirclePacking(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace useCirclePacking {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
}
export class VerticalBarSeries {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(attr: any): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace VerticalBarSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class VerticalBarSeriesCanvas {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(attr: any): any;
  static isCanvas: any;
  static renderLayer(props: any, ctx: any): void;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace VerticalBarSeriesCanvas {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export function VerticalGridLines(props: any): any;
export namespace VerticalGridLines {
  const defaultProps: {
    attr: string;
    direction: string;
  };
  const displayName: string;
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function attr(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function direction(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace direction {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerHeight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace left {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginBottom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginBottom {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginLeft(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginLeft {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginRight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginRight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginTop {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickTotal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickTotal {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickValues(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickValues {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace top {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
  const requiresSVG: boolean;
}
export class VerticalRectSeries {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(attr: any): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace VerticalRectSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class VerticalRectSeriesCanvas {
  static defaultProps: {
    className: string;
    stack: boolean;
    style: {};
  };
  static displayName: string;
  static getParentConfig(attr: any): any;
  static isCanvas: any;
  static renderLayer(props: any, ctx: any): void;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace VerticalRectSeriesCanvas {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export function Voronoi(props: any): any;
export namespace Voronoi {
  namespace defaultProps {
    const className: string;
    function onBlur(f: any): any;
    function onClick(f: any): any;
    function onHover(f: any): any;
    function onMouseDown(f: any): any;
    function onMouseUp(f: any): any;
  }
  const displayName: string;
  namespace propTypes {
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function extent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace extent {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function nodes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function onBlur(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onBlur {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onHover(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onHover {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onMouseDown(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onMouseDown {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onMouseUp(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onMouseUp {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace x {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace y {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
  const requiresSVG: boolean;
}
export class WhiskerSeries {
  static defaultProps: {
    className: string;
    crossBarWidth: number;
    size: number;
    stack: boolean;
    strokeWidth: number;
    style: {};
  };
  static displayName: string;
  static getParentConfig(): any;
  static requiresSVG: any;
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  onParentMouseMove(event: any): void;
  onParentTouchMove(e: any): void;
  onParentTouchStart(e: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace WhiskerSeries {
  namespace propTypes {
    function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace animation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function colorType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace colorType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace data {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getColor0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getColor0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getOpacity0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getOpacity0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getSize0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getSize0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getX0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getX0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function getY0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace getY0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestX(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestX {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onNearestXY(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onNearestXY {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSeriesRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSeriesRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOut(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOut {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueMouseOver {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValueRightClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValueRightClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function opacityType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace opacityType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function sizeType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace sizeType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function stack(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace stack {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function strokeWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace strokeWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function xType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace xType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yBaseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yBaseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDistance {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yDomain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yDomain {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yRange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yRange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function yType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace yType {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export function XAxis(props: any): any;
export namespace XAxis {
  const defaultProps: {
    attr: string;
    attrAxis: string;
    orientation: string;
  };
  const displayName: string;
  namespace propTypes {
    function attr(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function attrAxis(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace attrAxis {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function hideLine(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace hideLine {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function hideTicks(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace hideTicks {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerHeight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace left {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginBottom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginBottom {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginLeft(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginLeft {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginRight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginRight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginTop {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function on0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace on0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function orientation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace orientation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickFormat(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickFormat {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickLabelAngle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickLabelAngle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickPadding(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickPadding {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickSizeInner(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickSizeInner {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickSizeOuter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickSizeOuter {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickTotal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickTotal {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickValues(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickValues {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace title {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace top {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
  const requiresSVG: boolean;
}
export class XYPlot {
  static defaultProps: any;
  static displayName: string;
  static propTypes: any;
  constructor(props: any);
  componentWillReceiveProps(nextProps: any): void;
  forceUpdate(callback: any): void;
  render(): any;
  renderCanvasComponents(components: any, props: any): any;
  setState(partialState: any, callback: any): void;
}
export function YAxis(props: any): any;
export namespace YAxis {
  const defaultProps: {
    attr: string;
    attrAxis: string;
    orientation: string;
  };
  const displayName: string;
  namespace propTypes {
    function attr(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function attrAxis(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace attrAxis {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace height {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function hideLine(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace hideLine {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function hideTicks(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace hideTicks {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerHeight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function innerWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace innerWidth {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace left {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginBottom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginBottom {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginLeft(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginLeft {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginRight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginRight {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function marginTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace marginTop {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function on0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace on0 {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function orientation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace orientation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace style {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickFormat(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickFormat {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickLabelAngle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickLabelAngle {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickPadding(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickPadding {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickSize {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickSizeInner(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickSizeInner {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickSizeOuter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickSizeOuter {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickTotal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickTotal {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tickValues(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tickValues {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace title {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace top {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace width {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
  const requiresSVG: boolean;
}
export const makeHeightFlexible: any;
export const makeVisFlexible: any;
export const makeWidthFlexible: any;