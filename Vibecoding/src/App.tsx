import Deck from './deck/Deck';
import Slide01Title from './slides/Slide01Title';
import Slide02KonsepVibeCoding from './slides/Slide02KonsepVibeCoding';
import Slide03WorkflowTigaTahap from './slides/Slide03WorkflowTigaTahap';
import Slide04GoogleStitchIntro from './slides/Slide04GoogleStitchIntro';
import Slide05StitchPrompting from './slides/Slide05StitchPrompting';
import Slide06StitchPreviewExport from './slides/Slide06StitchPreviewExport';
import Slide07AIStudioIntro from './slides/Slide07AIStudioIntro';
import Slide08AIStudioBuildPrompt from './slides/Slide08AIStudioBuildPrompt';
import Slide09AIStudioAnnotation from './slides/Slide09AIStudioAnnotation';
import Slide10AntigravityIntro from './slides/Slide10AntigravityIntro';
import Slide11AntigravityMCP from './slides/Slide11AntigravityMCP';
import Slide12AgentsSkillsConfig from './slides/Slide12AgentsSkillsConfig';
import Slide13WorkflowStartCycle from './slides/Slide13WorkflowStartCycle';
import Slide14StudiKasusKeripik from './slides/Slide14StudiKasusKeripik';
import Slide15PromptComparison from './slides/Slide15PromptComparison';
import Slide16SimulationConsole from './slides/Slide16SimulationConsole';
import Slide17RubrikPenilaian from './slides/Slide17RubrikPenilaian';
import Slide18Troubleshooting from './slides/Slide18Troubleshooting';
import Slide19TipsSukses from './slides/Slide19TipsSukses';
import Slide20RangkumanReferensi from './slides/Slide20RangkumanReferensi';

export default function App() {
  return (
    <Deck>
      <Slide01Title nav={Slide01Title.nav} notes={Slide01Title.notes} />
      <Slide02KonsepVibeCoding nav={Slide02KonsepVibeCoding.nav} notes={Slide02KonsepVibeCoding.notes} />
      <Slide03WorkflowTigaTahap nav={Slide03WorkflowTigaTahap.nav} notes={Slide03WorkflowTigaTahap.notes} />
      <Slide04GoogleStitchIntro nav={Slide04GoogleStitchIntro.nav} notes={Slide04GoogleStitchIntro.notes} />
      <Slide05StitchPrompting nav={Slide05StitchPrompting.nav} notes={Slide05StitchPrompting.notes} />
      <Slide06StitchPreviewExport nav={Slide06StitchPreviewExport.nav} notes={Slide06StitchPreviewExport.notes} />
      <Slide07AIStudioIntro nav={Slide07AIStudioIntro.nav} notes={Slide07AIStudioIntro.notes} />
      <Slide08AIStudioBuildPrompt nav={Slide08AIStudioBuildPrompt.nav} notes={Slide08AIStudioBuildPrompt.notes} />
      <Slide09AIStudioAnnotation nav={Slide09AIStudioAnnotation.nav} notes={Slide09AIStudioAnnotation.notes} />
      <Slide10AntigravityIntro nav={Slide10AntigravityIntro.nav} notes={Slide10AntigravityIntro.notes} />
      <Slide11AntigravityMCP nav={Slide11AntigravityMCP.nav} notes={Slide11AntigravityMCP.notes} />
      <Slide12AgentsSkillsConfig nav={Slide12AgentsSkillsConfig.nav} notes={Slide12AgentsSkillsConfig.notes} />
      <Slide13WorkflowStartCycle nav={Slide13WorkflowStartCycle.nav} notes={Slide13WorkflowStartCycle.notes} />
      <Slide14StudiKasusKeripik nav={Slide14StudiKasusKeripik.nav} notes={Slide14StudiKasusKeripik.notes} />
      <Slide15PromptComparison nav={Slide15PromptComparison.nav} notes={Slide15PromptComparison.notes} />
      <Slide16SimulationConsole nav={Slide16SimulationConsole.nav} notes={Slide16SimulationConsole.notes} />
      <Slide17RubrikPenilaian nav={Slide17RubrikPenilaian.nav} notes={Slide17RubrikPenilaian.notes} />
      <Slide18Troubleshooting nav={Slide18Troubleshooting.nav} notes={Slide18Troubleshooting.notes} />
      <Slide19TipsSukses nav={Slide19TipsSukses.nav} notes={Slide19TipsSukses.notes} />
      <Slide20RangkumanReferensi nav={Slide20RangkumanReferensi.nav} notes={Slide20RangkumanReferensi.notes} />
    </Deck>
  );
}
