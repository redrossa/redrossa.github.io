import Toolkit from '../components/Toolkit';

import StatsLogo from     '../components/thumbnails/StatsLogo'
import MatrixLogo from    '../components/thumbnails/MatrixLogo'
import SetsLogo from      '../components/thumbnails/SetsLogo'
import TruthTableLogo from '../components/thumbnails/TruthTableLogo';
import LC3Logo from '../components/thumbnails/LC3Logo';
import RegexLogo from '../components/thumbnails/RegexLogo';
import RadixSortLogo from '../components/thumbnails/RadixSortLogo';
import RBTLogo from '../components/thumbnails/RBTLogo';
import DijkstraLogo from '../components/thumbnails/DijkstraLogo';

import Tool from "../components/Tool";

export default function Home() {
  return (
      <div className='Home'>
        <h1>Redrossa's Toolkit</h1>
        <Toolkit>
          <Tool dest='/' icon={StatsLogo}>Statistics Calculator</Tool>
          <Tool dest='/' icon={MatrixLogo}>Linear Algebra Step-by-Step Evaluator</Tool>
          <Tool dest='/' icon={SetsLogo}>Sets Evaluator</Tool>
          <Tool dest='/' icon={TruthTableLogo}>Predicate Truths Tabulator</Tool>
          <Tool href dest='http://lc3tutor.org' icon={LC3Logo}>LC-3 Simulator by William Chargin</Tool>
          <Tool href dest='https://regexr.com' icon={RegexLogo}>Regex Builder by gskinner</Tool>
          <Tool dest='/' icon={RadixSortLogo}>Radix Sort Visualizer</Tool>
          <Tool dest='/' icon={RBTLogo}>Red-Black Tree Visualizer</Tool>
          <Tool dest='/' icon={DijkstraLogo}>Dijkstra's Shortest Path Visualizer</Tool>
        </Toolkit>
      </div>
  );
}
