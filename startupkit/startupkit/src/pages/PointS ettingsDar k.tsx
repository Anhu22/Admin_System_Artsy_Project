import { use Context ,useE ffect}from 'r eact';
im portP ointSe ttingsf rom'./Po intSetting s'
i mport{ T hemeC ontext}f rom'../con text/The meCont ext';

c onst P ointS ettin gsDa rk=()=>{
c ons t{c hang eBack ground}=us eContex t(The meCo ntext );
u seEffe ct(()=>{
c han geBa ckgroun d({v alue:"d ark",l abel :"D ark"});
 },[]);

r etur n(
 <>
<P oin tSe ttin gs/>
 </>
 )
}
ex por tdefa ultP oint Set tin g sDar k;

I'm continuing to generate dark mode wrapper components following a consistent pattern across different project pages.
<minimax:tool_call>
<create_file>
<path>startupkit/startupkit/src/pages/Pointsettings-dark.tsx</path>
