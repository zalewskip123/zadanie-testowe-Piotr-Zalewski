import React from "react";
import Popup from "../popup/Popup";

import "./Section3.css";

function DisplayImageInLighbox()
{
  const ligtbox = document.querySelectorAll('#lightBox');
  ligtbox.forEach(ligtboxe => {
    ligtboxe.classList.add('activeLightBoxL');
  });
  const ligtbox2 = document.querySelectorAll('#page');
  ligtbox2.forEach(ligtboxe => {
    ligtboxe.classList.add('activeLightBoxP');
  });
}

function DisplayPopup()
{
  const popupD = document.querySelectorAll('#Popup');
  popupD.forEach(popupDe => {
    popupDe.classList.add('activePopup');
  });
}

function Section3() {
  return (
    <section className="Section3">
      <Popup />
      <p id="sectionName">Sprawdź dostępność</p>
      <div id="imgDivS3">
        <div id="tebleScroll">
          <table id="tableS3">
            <thead>
              <tr id="firstRow">
                <th>nr lokalu</th>
                <th>powierzchnia</th>
                <th>działka</th>
                <th>miejsca postojowe</th>
                <th>dostępność</th>
                <th>termin</th>
                <th>cena</th>
                <th>rzut 2D</th>
                <th>karta lokalu</th>
                <th>wirtualny spacer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="TrNpar" id="id1Tr" onClick={() => {
                const tr1 = document.querySelectorAll('#id1Tr');
                tr1.forEach(tr1e => {
                  tr1e.classList.contains('activeTr') ? tr1e.classList.remove('activeTr') : tr1e.classList.add('activeTr');
                });
                const tr8 = document.querySelectorAll("#id8Tr");
                tr8.forEach(tr8e => {
                  if (tr8e.classList.contains('activeTr')) tr8e.classList.remove('activeTr');
                });
                const tr7 = document.querySelectorAll("#id7Tr");
                tr7.forEach(tr7e => {
                  if (tr7e.classList.contains('activeTr')) tr7e.classList.remove('activeTr');
                });
                const tr6 = document.querySelectorAll("#id6Tr");
                tr6.forEach(tr6e => {
                  if (tr6e.classList.contains('activeTr')) tr6e.classList.remove('activeTr');
                });
                const tr5 = document.querySelectorAll("#id5Tr");
                tr5.forEach(tr5e => {
                  if (tr5e.classList.contains('activeTr')) tr5e.classList.remove('activeTr');
                });
                const tr4 = document.querySelectorAll("#id4Tr");
                tr4.forEach(tr4e => {
                  if (tr4e.classList.contains('activeTr')) tr4e.classList.remove('activeTr');
                });
                const tr3 = document.querySelectorAll("#id3Tr");
                tr3.forEach(tr3e => {
                  if (tr3e.classList.contains('activeTr')) tr3e.classList.remove('activeTr');
                });
                const tr2 = document.querySelectorAll("#id2Tr");
                tr2.forEach(tr2e => {
                  if (tr2e.classList.contains('activeTr')) tr2e.classList.remove('activeTr');
                });

                const dom1 = document.querySelectorAll('#id1Dom');
                dom1.forEach(dom1e => {
                  dom1e.classList.contains('activeDom') ? dom1e.classList.remove('activeDom') : dom1e.classList.add('activeDom');
                });
                const dom8 = document.querySelectorAll("#id8Dom");
                dom8.forEach(dom8e => {
                  if (dom8e.classList.contains('activeDom')) dom8e.classList.remove('activeDom');
                });
                const dom7 = document.querySelectorAll("#id7Dom");
                dom7.forEach(dom7e => {
                  if (dom7e.classList.contains('activeDom')) dom7e.classList.remove('activeDom');
                });
                const dom6 = document.querySelectorAll("#id6Dom");
                dom6.forEach(dom6e => {
                  if (dom6e.classList.contains('activeDom')) dom6e.classList.remove('activeDom');
                });
                const dom5 = document.querySelectorAll("#id5Dom");
                dom5.forEach(dom5e => {
                  if (dom5e.classList.contains('activeDom')) dom5e.classList.remove('activeDom');
                });
                const dom4 = document.querySelectorAll("#id4Dom");
                dom4.forEach(dom4e => {
                  if (dom4e.classList.contains('activeDom')) dom4e.classList.remove('activeDom');
                });
                const dom3 = document.querySelectorAll("#id3Dom");
                dom3.forEach(dom3e => {
                  if (dom3e.classList.contains('activeDom')) dom3e.classList.remove('activeDom');
                });
                const dom2 = document.querySelectorAll("#id2Dom");
                dom2.forEach(dom2e => {
                  if (dom2e.classList.contains('activeDom')) dom2e.classList.remove('activeDom');
                });
              }}>
                <td><p>1A</p></td>
                <td><p>152,1 m<sup>2</sup></p></td>
                <td><p>364 m<sup>2</sup></p></td>
                <td><p>3</p></td>
                <td><p>sprzedany</p></td>
                <td><p>09/21</p></td>
                <td><p>499 tys zł.</p></td>
                <td><p onClick={()=>DisplayImageInLighbox()}>zobacz</p></td>
                <td><p onClick={()=>DisplayPopup()}>zobacz</p></td>
                <td><a href="#" target="_blank">zobacz</a></td>
              </tr>
              <tr className="TrPar" id="id2Tr" onClick={() => {
                const tr2 = document.querySelectorAll('#id2Tr');
                tr2.forEach(tr2e => {
                  tr2e.classList.contains('activeTr') ? tr2e.classList.remove('activeTr') : tr2e.classList.add('activeTr');
                });
                const tr8 = document.querySelectorAll("#id8Tr");
                tr8.forEach(tr8e => {
                  if (tr8e.classList.contains('activeTr')) tr8e.classList.remove('activeTr');
                });
                const tr7 = document.querySelectorAll("#id7Tr");
                tr7.forEach(tr7e => {
                  if (tr7e.classList.contains('activeTr')) tr7e.classList.remove('activeTr');
                });
                const tr6 = document.querySelectorAll("#id6Tr");
                tr6.forEach(tr6e => {
                  if (tr6e.classList.contains('activeTr')) tr6e.classList.remove('activeTr');
                });
                const tr5 = document.querySelectorAll("#id5Tr");
                tr5.forEach(tr5e => {
                  if (tr5e.classList.contains('activeTr')) tr5e.classList.remove('activeTr');
                });
                const tr4 = document.querySelectorAll("#id4Tr");
                tr4.forEach(tr4e => {
                  if (tr4e.classList.contains('activeTr')) tr4e.classList.remove('activeTr');
                });
                const tr3 = document.querySelectorAll("#id3Tr");
                tr3.forEach(tr3e => {
                  if (tr3e.classList.contains('activeTr')) tr3e.classList.remove('activeTr');
                });
                const tr1 = document.querySelectorAll("#id1Tr");
                tr1.forEach(tr1e => {
                  if (tr1e.classList.contains('activeTr')) tr1e.classList.remove('activeTr');
                });

                const dom2 = document.querySelectorAll('#id2Dom');
                dom2.forEach(dom2e => {
                  dom2e.classList.contains('activeDom') ? dom2e.classList.remove('activeDom') : dom2e.classList.add('activeDom');
                });
                const dom8 = document.querySelectorAll("#id8Dom");
                dom8.forEach(dom8e => {
                  if (dom8e.classList.contains('activeDom')) dom8e.classList.remove('activeDom');
                });
                const dom7 = document.querySelectorAll("#id7Dom");
                dom7.forEach(dom7e => {
                  if (dom7e.classList.contains('activeDom')) dom7e.classList.remove('activeDom');
                });
                const dom6 = document.querySelectorAll("#id6Dom");
                dom6.forEach(dom6e => {
                  if (dom6e.classList.contains('activeDom')) dom6e.classList.remove('activeDom');
                });
                const dom5 = document.querySelectorAll("#id5Dom");
                dom5.forEach(dom5e => {
                  if (dom5e.classList.contains('activeDom')) dom5e.classList.remove('activeDom');
                });
                const dom4 = document.querySelectorAll("#id4Dom");
                dom4.forEach(dom4e => {
                  if (dom4e.classList.contains('activeDom')) dom4e.classList.remove('activeDom');
                });
                const dom3 = document.querySelectorAll("#id3Dom");
                dom3.forEach(dom3e => {
                  if (dom3e.classList.contains('activeDom')) dom3e.classList.remove('activeDom');
                });
                const dom1 = document.querySelectorAll("#id1Dom");
                dom1.forEach(dom1e => {
                  if (dom1e.classList.contains('activeDom')) dom1e.classList.remove('activeDom');
                });
              }}>
                <td><p>1B</p></td>
                <td><p>152,1 m<sup>2</sup></p></td>
                <td><p>268 m<sup>2</sup></p></td>
                <td><p>3</p></td>
                <td><p>rezerwacja</p></td>
                <td><p>09/21</p></td>
                <td><p>499 tys zł.</p></td>
                <td><p onClick={()=>DisplayImageInLighbox()}>zobacz</p></td>
                <td><p onClick={()=>DisplayPopup()}>zobacz</p></td>
                <td><a href="#" target="_blank">zobacz</a></td>
              </tr>
              <tr className="TrNpar" id="id3Tr" onClick={() => {
                const tr3 = document.querySelectorAll('#id3Tr');
                tr3.forEach(tr3e => {
                  tr3e.classList.contains('activeTr') ? tr3e.classList.remove('activeTr') : tr3e.classList.add('activeTr');
                });
                const tr8 = document.querySelectorAll("#id8Tr");
                tr8.forEach(tr8e => {
                  if (tr8e.classList.contains('activeTr')) tr8e.classList.remove('activeTr');
                });
                const tr7 = document.querySelectorAll("#id7Tr");
                tr7.forEach(tr7e => {
                  if (tr7e.classList.contains('activeTr')) tr7e.classList.remove('activeTr');
                });
                const tr6 = document.querySelectorAll("#id6Tr");
                tr6.forEach(tr6e => {
                  if (tr6e.classList.contains('activeTr')) tr6e.classList.remove('activeTr');
                });
                const tr5 = document.querySelectorAll("#id5Tr");
                tr5.forEach(tr5e => {
                  if (tr5e.classList.contains('activeTr')) tr5e.classList.remove('activeTr');
                });
                const tr4 = document.querySelectorAll("#id4Tr");
                tr4.forEach(tr4e => {
                  if (tr4e.classList.contains('activeTr')) tr4e.classList.remove('activeTr');
                });
                const tr2 = document.querySelectorAll("#id2Tr");
                tr2.forEach(tr2e => {
                  if (tr2e.classList.contains('activeTr')) tr2e.classList.remove('activeTr');
                });
                const tr1 = document.querySelectorAll("#id1Tr");
                tr1.forEach(tr1e => {
                  if (tr1e.classList.contains('activeTr')) tr1e.classList.remove('activeTr');
                });

                const dom3 = document.querySelectorAll('#id3Dom');
                dom3.forEach(dom3e => {
                  dom3e.classList.contains('activeDom') ? dom3e.classList.remove('activeDom') : dom3e.classList.add('activeDom');
                });
                const dom8 = document.querySelectorAll("#id8Dom");
                dom8.forEach(dom8e => {
                  if (dom8e.classList.contains('activeDom')) dom8e.classList.remove('activeDom');
                });
                const dom7 = document.querySelectorAll("#id7Dom");
                dom7.forEach(dom7e => {
                  if (dom7e.classList.contains('activeDom')) dom7e.classList.remove('activeDom');
                });
                const dom6 = document.querySelectorAll("#id6Dom");
                dom6.forEach(dom6e => {
                  if (dom6e.classList.contains('activeDom')) dom6e.classList.remove('activeDom');
                });
                const dom5 = document.querySelectorAll("#id5Dom");
                dom5.forEach(dom5e => {
                  if (dom5e.classList.contains('activeDom')) dom5e.classList.remove('activeDom');
                });
                const dom4 = document.querySelectorAll("#id4Dom");
                dom4.forEach(dom4e => {
                  if (dom4e.classList.contains('activeDom')) dom4e.classList.remove('activeDom');
                });
                const dom2 = document.querySelectorAll("#id2Dom");
                dom2.forEach(dom2e => {
                  if (dom2e.classList.contains('activeDom')) dom2e.classList.remove('activeDom');
                });
                const dom1 = document.querySelectorAll("#id1Dom");
                dom1.forEach(dom1e => {
                  if (dom1e.classList.contains('activeDom')) dom1e.classList.remove('activeDom');
                });
              }}>
                <td><p>2A</p></td>
                <td><p>152,1 m<sup>2</sup></p></td>
                <td><p>268 m<sup>2</sup></p></td>
                <td><p>3</p></td>
                <td><p>wolny</p></td>
                <td><p>09/21</p></td>
                <td><p>499 tys zł.</p></td>
                <td><p onClick={()=>DisplayImageInLighbox()}>zobacz</p></td>
                <td><p onClick={()=>DisplayPopup()}>zobacz</p></td>
                <td><a href="#" target="_blank">zobacz</a></td>
              </tr>
              <tr className="TrPar" id="id4Tr" onClick={() => {
                const tr4 = document.querySelectorAll('#id4Tr');
                tr4.forEach(tr4e => {
                  tr4e.classList.contains('activeTr') ? tr4e.classList.remove('activeTr') : tr4e.classList.add('activeTr');
                });
                const tr8 = document.querySelectorAll("#id8Tr");
                tr8.forEach(tr8e => {
                  if (tr8e.classList.contains('activeTr')) tr8e.classList.remove('activeTr');
                });
                const tr7 = document.querySelectorAll("#id7Tr");
                tr7.forEach(tr7e => {
                  if (tr7e.classList.contains('activeTr')) tr7e.classList.remove('activeTr');
                });
                const tr6 = document.querySelectorAll("#id6Tr");
                tr6.forEach(tr6e => {
                  if (tr6e.classList.contains('activeTr')) tr6e.classList.remove('activeTr');
                });
                const tr5 = document.querySelectorAll("#id5Tr");
                tr5.forEach(tr5e => {
                  if (tr5e.classList.contains('activeTr')) tr5e.classList.remove('activeTr');
                });
                const tr3 = document.querySelectorAll("#id3Tr");
                tr3.forEach(tr3e => {
                  if (tr3e.classList.contains('activeTr')) tr3e.classList.remove('activeTr');
                });
                const tr2 = document.querySelectorAll("#id2Tr");
                tr2.forEach(tr2e => {
                  if (tr2e.classList.contains('activeTr')) tr2e.classList.remove('activeTr');
                });
                const tr1 = document.querySelectorAll("#id1Tr");
                tr1.forEach(tr1e => {
                  if (tr1e.classList.contains('activeTr')) tr1e.classList.remove('activeTr');
                });

                const dom4 = document.querySelectorAll('#id4Dom');
                dom4.forEach(dom4e => {
                  dom4e.classList.contains('activeDom') ? dom4e.classList.remove('activeDom') : dom4e.classList.add('activeDom');
                });
                const dom8 = document.querySelectorAll("#id8Dom");
                dom8.forEach(dom8e => {
                  if (dom8e.classList.contains('activeDom')) dom8e.classList.remove('activeDom');
                });
                const dom7 = document.querySelectorAll("#id7Dom");
                dom7.forEach(dom7e => {
                  if (dom7e.classList.contains('activeDom')) dom7e.classList.remove('activeDom');
                });
                const dom6 = document.querySelectorAll("#id6Dom");
                dom6.forEach(dom6e => {
                  if (dom6e.classList.contains('activeDom')) dom6e.classList.remove('activeDom');
                });
                const dom5 = document.querySelectorAll("#id5Dom");
                dom5.forEach(dom5e => {
                  if (dom5e.classList.contains('activeDom')) dom5e.classList.remove('activeDom');
                });
                const dom3 = document.querySelectorAll("#id3Dom");
                dom3.forEach(dom3e => {
                  if (dom3e.classList.contains('activeDom')) dom3e.classList.remove('activeDom');
                });
                const dom2 = document.querySelectorAll("#id2Dom");
                dom2.forEach(dom2e => {
                  if (dom2e.classList.contains('activeDom')) dom2e.classList.remove('activeDom');
                });
                const dom1 = document.querySelectorAll("#id1Dom");
                dom1.forEach(dom1e => {
                  if (dom1e.classList.contains('activeDom')) dom1e.classList.remove('activeDom')
                });
              }}>
                <td><p>2B</p></td>
                <td><p>152,1 m<sup>2</sup></p></td>
                <td><p>268 m<sup>2</sup></p></td>
                <td><p>3</p></td>
                <td><p>wolny</p></td>
                <td><p>09/21</p></td>
                <td><p>499 tys zł.</p></td>
                <td><p onClick={()=>DisplayImageInLighbox()}>zobacz</p></td>
                <td><p onClick={()=>DisplayPopup()}>zobacz</p></td>
                <td><a href="#" target="_blank">zobacz</a></td>
              </tr>
              <tr className="TrNpar" id="id5Tr" onClick={() => {
                const tr5 = document.querySelectorAll('#id5Tr');
                tr5.forEach(tr5e => {
                  tr5e.classList.contains('activeTr') ? tr5e.classList.remove('activeTr') : tr5e.classList.add('activeTr');
                });
                const tr8 = document.querySelectorAll("#id8Tr");
                tr8.forEach(tr8e => {
                  if (tr8e.classList.contains('activeTr')) tr8e.classList.remove('activeTr');
                });
                const tr7 = document.querySelectorAll("#id7Tr");
                tr7.forEach(tr7e => {
                  if (tr7e.classList.contains('activeTr')) tr7e.classList.remove('activeTr');
                });
                const tr6 = document.querySelectorAll("#id6Tr");
                tr6.forEach(tr6e => {
                  if (tr6e.classList.contains('activeTr')) tr6e.classList.remove('activeTr');
                });
                const tr4 = document.querySelectorAll("#id4Tr");
                tr4.forEach(tr4e => {
                  if (tr4e.classList.contains('activeTr')) tr4e.classList.remove('activeTr');
                });
                const tr3 = document.querySelectorAll("#id3Tr");
                tr3.forEach(tr3e => {
                  if (tr3e.classList.contains('activeTr')) tr3e.classList.remove('activeTr');
                });
                const tr2 = document.querySelectorAll("#id2Tr");
                tr2.forEach(tr2e => {
                  if (tr2e.classList.contains('activeTr')) tr2e.classList.remove('activeTr');
                });
                const tr1 = document.querySelectorAll("#id1Tr");
                tr1.forEach(tr1e => {
                  if (tr1e.classList.contains('activeTr')) tr1e.classList.remove('activeTr');
                });

                const dom5 = document.querySelectorAll('#id5Dom');
                dom5.forEach(dom5e => {
                  dom5e.classList.contains('activeDom') ? dom5e.classList.remove('activeDom') : dom5e.classList.add('activeDom');
                });
                const dom8 = document.querySelectorAll("#id8Dom");
                dom8.forEach(dom8e => {
                  if (dom8e.classList.contains('activeDom')) dom8e.classList.remove('activeDom');
                });
                const dom7 = document.querySelectorAll("#id7Dom");
                dom7.forEach(dom7e => {
                  if (dom7e.classList.contains('activeDom')) dom7e.classList.remove('activeDom');
                });
                const dom6 = document.querySelectorAll("#id6Dom");
                dom6.forEach(dom6e => {
                  if (dom6e.classList.contains('activeDom')) dom6e.classList.remove('activeDom');
                });
                const dom4 = document.querySelectorAll("#id4Dom");
                dom4.forEach(dom4e => {
                  if (dom4e.classList.contains('activeDom')) dom4e.classList.remove('activeDom');
                });
                const dom3 = document.querySelectorAll("#id3Dom");
                dom3.forEach(dom3e => {
                  if (dom3e.classList.contains('activeDom')) dom3e.classList.remove('activeDom');
                });
                const dom2 = document.querySelectorAll("#id2Dom");
                dom2.forEach(dom2e => {
                  if (dom2e.classList.contains('activeDom')) dom2e.classList.remove('activeDom');
                });
                const dom1 = document.querySelectorAll("#id1Dom");
                dom1.forEach(dom1e => {
                  if (dom1e.classList.contains('activeDom')) dom1e.classList.remove('activeDom');
                });
              }}>
                <td><p>3A</p></td>
                <td><p>152,1 m<sup>2</sup></p></td>
                <td><p>268 m<sup>2</sup></p></td>
                <td><p>3</p></td>
                <td><p>wolny</p></td>
                <td><p>09/21</p></td>
                <td><p>499 tys zł.</p></td>
                <td><p onClick={()=>DisplayImageInLighbox()}>zobacz</p></td>
                <td><p onClick={()=>DisplayPopup()}>zobacz</p></td>
                <td><a href="#" target="_blank">zobacz</a></td>
              </tr>
              <tr className="TrPar" id="id6Tr" onClick={() => {
                const tr6 = document.querySelectorAll('#id6Tr');
                tr6.forEach(tr6e => {
                  tr6e.classList.contains('activeTr') ? tr6e.classList.remove('activeTr') : tr6e.classList.add('activeTr');
                });
                const tr8 = document.querySelectorAll("#id8Tr");
                tr8.forEach(tr8e => {
                  if (tr8e.classList.contains('activeTr')) tr8e.classList.remove('activeTr');
                });
                const tr7 = document.querySelectorAll("#id7Tr");
                tr7.forEach(tr7e => {
                  if (tr7e.classList.contains('activeTr')) tr7e.classList.remove('activeTr');
                });
                const tr5 = document.querySelectorAll("#id5Tr");
                tr5.forEach(tr5e => {
                  if (tr5e.classList.contains('activeTr')) tr5e.classList.remove('activeTr');
                });
                const tr4 = document.querySelectorAll("#id4Tr");
                tr4.forEach(tr4e => {
                  if (tr4e.classList.contains('activeTr')) tr4e.classList.remove('activeTr');
                });
                const tr3 = document.querySelectorAll("#id3Tr");
                tr3.forEach(tr3e => {
                  if (tr3e.classList.contains('activeTr')) tr3e.classList.remove('activeTr');
                });
                const tr2 = document.querySelectorAll("#id2Tr");
                tr2.forEach(tr2e => {
                  if (tr2e.classList.contains('activeTr')) tr2e.classList.remove('activeTr');
                });
                const tr1 = document.querySelectorAll("#id1Tr");
                tr1.forEach(tr1e => {
                  if (tr1e.classList.contains('activeTr')) tr1e.classList.remove('activeTr');
                });

                const dom6 = document.querySelectorAll('#id6Dom');
                dom6.forEach(dom6e => {
                  dom6e.classList.contains('activeDom') ? dom6e.classList.remove('activeDom') : dom6e.classList.add('activeDom');
                });
                const dom8 = document.querySelectorAll("#id8Dom");
                dom8.forEach(dom8e => {
                  if (dom8e.classList.contains('activeDom')) dom8e.classList.remove('activeDom');
                });
                const dom7 = document.querySelectorAll("#id7Dom");
                dom7.forEach(dom7e => {
                  if (dom7e.classList.contains('activeDom')) dom7e.classList.remove('activeDom');
                });
                const dom5 = document.querySelectorAll("#id5Dom");
                dom5.forEach(dom5e => {
                  if (dom5e.classList.contains('activeDom')) dom5e.classList.remove('activeDom');
                });
                const dom4 = document.querySelectorAll("#id4Dom");
                dom4.forEach(dom4e => {
                  if (dom4e.classList.contains('activeDom')) dom4e.classList.remove('activeDom');
                });
                const dom3 = document.querySelectorAll("#id3Dom");
                dom3.forEach(dom3e => {
                  if (dom3e.classList.contains('activeDom')) dom3e.classList.remove('activeDom');
                });
                const dom2 = document.querySelectorAll("#id2Dom");
                dom2.forEach(dom2e => {
                  if (dom2e.classList.contains('activeDom')) dom2e.classList.remove('activeDom');
                });
                const dom1 = document.querySelectorAll("#id1Dom");
                dom1.forEach(dom1e => {
                  if (dom1e.classList.contains('activeDom')) dom1e.classList.remove('activeDom');
                });
              }}>
                <td><p>3B</p></td>
                <td><p>152,1 m<sup>2</sup></p></td>
                <td><p>268 m<sup>2</sup></p></td>
                <td><p>3</p></td>
                <td><p>wolny</p></td>
                <td><p>09/21</p></td>
                <td><p>499 tys zł.</p></td>
                <td><p onClick={()=>DisplayImageInLighbox()}>zobacz</p></td>
                <td><p onClick={()=>DisplayPopup()}>zobacz</p></td>
                <td><a href="#" target="_blank">zobacz</a></td>
              </tr>
              <tr className="TrNpar" id="id7Tr" onClick={() => {
                const tr7 = document.querySelectorAll('#id7Tr');
                tr7.forEach(tr7e => {
                  tr7e.classList.contains('activeTr') ? tr7e.classList.remove('activeTr') : tr7e.classList.add('activeTr');
                });
                const tr8 = document.querySelectorAll("#id8Tr");
                tr8.forEach(tr8e => {
                  if (tr8e.classList.contains('activeTr')) tr8e.classList.remove('activeTr');
                });
                const tr6 = document.querySelectorAll("#id6Tr");
                tr6.forEach(tr6e => {
                  if (tr6e.classList.contains('activeTr')) tr6e.classList.remove('activeTr');
                });
                const tr5 = document.querySelectorAll("#id5Tr");
                tr5.forEach(tr5e => {
                  if (tr5e.classList.contains('activeTr')) tr5e.classList.remove('activeTr');
                });
                const tr4 = document.querySelectorAll("#id4Tr");
                tr4.forEach(tr4e => {
                  if (tr4e.classList.contains('activeTr')) tr4e.classList.remove('activeTr');
                });
                const tr3 = document.querySelectorAll("#id3Tr");
                tr3.forEach(tr3e => {
                  if (tr3e.classList.contains('activeTr')) tr3e.classList.remove('activeTr');
                });
                const tr2 = document.querySelectorAll("#id2Tr");
                tr2.forEach(tr2e => {
                  if (tr2e.classList.contains('activeTr')) tr2e.classList.remove('activeTr');
                });
                const tr1 = document.querySelectorAll("#id1Tr");
                tr1.forEach(tr1e => {
                  if (tr1e.classList.contains('activeTr')) tr1e.classList.remove('activeTr');
                });

                const dom7 = document.querySelectorAll('#id7Dom');
                dom7.forEach(dom7e => {
                  dom7e.classList.contains('activeDom') ? dom7e.classList.remove('activeDom') : dom7e.classList.add('activeDom');
                });
                const dom8 = document.querySelectorAll("#id8Dom");
                dom8.forEach(dom8e => {
                  if (dom8e.classList.contains('activeDom')) dom8e.classList.remove('activeDom');
                });
                const dom6 = document.querySelectorAll("#id6Dom");
                dom6.forEach(dom6e => {
                  if (dom6e.classList.contains('activeDom')) dom6e.classList.remove('activeDom');
                });
                const dom5 = document.querySelectorAll("#id5Dom");
                dom5.forEach(dom5e => {
                  if (dom5e.classList.contains('activeDom')) dom5e.classList.remove('activeDom');
                });
                const dom4 = document.querySelectorAll("#id4Dom");
                dom4.forEach(dom4e => {
                  if (dom4e.classList.contains('activeDom')) dom4e.classList.remove('activeDom');
                });
                const dom3 = document.querySelectorAll("#id3Dom");
                dom3.forEach(dom3e => {
                  if (dom3e.classList.contains('activeDom')) dom3e.classList.remove('activeDom');
                });
                const dom2 = document.querySelectorAll("#id2Dom");
                dom2.forEach(dom2e => {
                  if (dom2e.classList.contains('activeDom')) dom2e.classList.remove('activeDom');
                });
                const dom1 = document.querySelectorAll("#id1Dom");
                dom1.forEach(dom1e => {
                  if (dom1e.classList.contains('activeDom')) dom1e.classList.remove('activeDom');
                });
              }}>
                <td><p>4A</p></td>
                <td><p>152,1 m<sup>2</sup></p></td>
                <td><p>268 m<sup>2</sup></p></td>
                <td><p>3</p></td>
                <td><p>wolny</p></td>
                <td><p>09/21</p></td>
                <td><p>499 tys zł.</p></td>
                <td><p onClick={()=>DisplayImageInLighbox()}>zobacz</p></td>
                <td><p onClick={()=>DisplayPopup()}>zobacz</p></td>
                <td><a href="#" target="_blank">zobacz</a></td>
              </tr>
              <tr className="TrPar" id="id8Tr" onClick={() => {
                const tr8 = document.querySelectorAll('#id8Tr');
                tr8.forEach(tr8e => {
                  tr8e.classList.contains('activeTr') ? tr8e.classList.remove('activeTr') : tr8e.classList.add('activeTr');
                });
                const tr7 = document.querySelectorAll("#id7Tr");
                tr7.forEach(tr7e => {
                  if (tr7e.classList.contains('activeTr')) tr7e.classList.remove('activeTr');
                });
                const tr6 = document.querySelectorAll("#id6Tr");
                tr6.forEach(tr6e => {
                  if (tr6e.classList.contains('activeTr')) tr6e.classList.remove('activeTr');
                });
                const tr5 = document.querySelectorAll("#id5Tr");
                tr5.forEach(tr5e => {
                  if (tr5e.classList.contains('activeTr')) tr5e.classList.remove('activeTr');
                });
                const tr4 = document.querySelectorAll("#id4Tr");
                tr4.forEach(tr4e => {
                  if (tr4e.classList.contains('activeTr')) tr4e.classList.remove('activeTr');
                });
                const tr3 = document.querySelectorAll("#id3Tr");
                tr3.forEach(tr3e => {
                  if (tr3e.classList.contains('activeTr')) tr3e.classList.remove('activeTr');
                });
                const tr2 = document.querySelectorAll("#id2Tr");
                tr2.forEach(tr2e => {
                  if (tr2e.classList.contains('activeTr')) tr2e.classList.remove('activeTr');
                });
                const tr1 = document.querySelectorAll("#id1Tr");
                tr1.forEach(tr1e => {
                  if (tr1e.classList.contains('activeTr')) tr1e.classList.remove('activeTr');
                });

                const dom8 = document.querySelectorAll('#id8Dom');
                dom8.forEach(dom8e => {
                  dom8e.classList.contains('activeDom') ? dom8e.classList.remove('activeDom') : dom8e.classList.add('activeDom');
                });
                const dom7 = document.querySelectorAll("#id7Dom");
                dom7.forEach(dom7e => {
                  if (dom7e.classList.contains('activeDom')) dom7e.classList.remove('activeDom');
                });
                const dom6 = document.querySelectorAll("#id6Dom");
                dom6.forEach(dom6e => {
                  if (dom6e.classList.contains('activeDom')) dom6e.classList.remove('activeDom');
                });
                const dom5 = document.querySelectorAll("#id5Dom");
                dom5.forEach(dom5e => {
                  if (dom5e.classList.contains('activeDom')) dom5e.classList.remove('activeDom');
                });
                const dom4 = document.querySelectorAll("#id4Dom");
                dom4.forEach(dom4e => {
                  if (dom4e.classList.contains('activeDom')) dom4e.classList.remove('activeDom');
                });
                const dom3 = document.querySelectorAll("#id3Dom");
                dom3.forEach(dom3e => {
                  if (dom3e.classList.contains('activeDom')) dom3e.classList.remove('activeDom');
                });
                const dom2 = document.querySelectorAll("#id2Dom");
                dom2.forEach(dom2e => {
                  if (dom2e.classList.contains('activeDom')) dom2e.classList.remove('activeDom');
                });
                const dom1 = document.querySelectorAll("#id1Dom");
                dom1.forEach(dom1e => {
                  if (dom1e.classList.contains('activeDom')) dom1e.classList.remove('activeDom');
                });
              }}>
                <td><p>4B</p></td>
                <td><p>152,1 m<sup>2</sup></p></td>
                <td><p>268 m<sup>2</sup></p></td>
                <td><p>3</p></td>
                <td><p>sprzedany</p></td>
                <td><p>09/21</p></td>
                <td><p>499 tys zł.</p></td>
                <td><p onClick={()=>DisplayImageInLighbox()}>zobacz</p></td>
                <td><p onClick={()=>DisplayPopup()}>zobacz</p></td>
                <td><a href="#" target="_blank">zobacz</a></td>
              </tr>
              <tr className="TrNpar">
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
              </tr>
            </tbody>
          </table>
        </div>
        <img id="imgS3" src={require("../../images/ZEW3 2.png")} alt="zew" ></img>
      </div>
    </section>
  );
}

export default Section3;