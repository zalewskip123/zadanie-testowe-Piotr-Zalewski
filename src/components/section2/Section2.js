import React from "react";

import "./Section2.css";

function Section2() {
    return (
        <section className="Section2">
            <p>Wybierz swój dom</p>
            <div id="imgDivS2">
                <img id="imgMap" src={require("../../images/Areal 1.png")} alt="area" useMap="#mapArea1"></img>
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 832" id="svg_map" width="100%" height="100%">
                    <g id="id8Dom" onClick={()=>{
                        document.querySelector('#id8Tr').scrollIntoView({
                            behavior: 'smooth'
                        });
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
                        <path id="Zaznaczenie8"
                            fill="none" stroke="black"
                            d="M 472.00,335.00
           C 467.92,332.50 458.02,330.04 453.00,328.58
             453.00,328.58 420.00,318.58 420.00,318.58
             420.00,318.58 364.00,301.58 364.00,301.58
             364.00,301.58 343.00,295.46 343.00,295.46
             343.00,295.46 318.00,294.00 318.00,294.00
             318.00,294.00 305.00,293.00 305.00,293.00
             305.00,293.00 285.00,291.80 285.00,291.80
             280.86,291.98 271.25,290.28 268.21,291.80
             265.40,292.82 264.07,296.46 262.69,299.00
             262.69,299.00 252.74,318.00 252.74,318.00
             252.74,318.00 224.86,371.00 224.86,371.00
             224.86,371.00 214.61,390.00 214.61,390.00
             210.43,395.34 204.96,399.52 200.00,404.08
             200.00,404.08 158.00,442.01 158.00,442.01
             149.30,450.60 130.56,478.45 122.29,490.00
             122.29,490.00 106.42,512.00 106.42,512.00
             104.30,514.97 99.77,520.83 98.70,524.00
             97.59,527.30 97.95,540.74 98.00,545.00
             98.00,545.00 99.00,560.00 99.00,560.00
             99.00,560.00 100.00,595.00 100.00,595.00
             100.03,597.16 100.03,598.88 100.63,601.00
             101.85,605.27 110.19,621.42 113.39,624.03
             115.54,625.79 127.66,630.84 131.00,632.28
             131.00,632.28 165.00,647.00 165.00,647.00
             165.00,647.00 182.00,654.30 182.00,654.30
             185.25,655.77 189.33,658.09 193.00,657.49
             196.03,657.00 208.42,649.31 212.00,647.28
             212.00,647.28 254.00,623.01 254.00,623.01
             254.00,623.01 285.00,605.15 285.00,605.15
             298.81,597.27 298.98,598.36 299.00,589.00
             299.00,589.00 299.00,516.00 299.00,516.00
             299.00,516.00 300.14,499.00 300.14,499.00
             300.14,499.00 300.14,470.00 300.14,470.00
             300.00,467.89 299.92,465.02 300.14,463.00
             301.30,459.36 310.12,445.24 312.58,441.00
             312.58,441.00 345.72,384.00 345.72,384.00
             345.72,384.00 370.80,341.00 370.80,341.00
             373.30,336.80 377.59,327.33 382.04,325.60
             384.21,324.75 388.49,325.08 391.00,324.91
             404.05,324.02 399.10,324.06 412.00,325.87
             412.00,325.87 453.00,332.27 453.00,332.27
             453.00,332.27 472.00,335.00 472.00,335.00 Z" />
                        <text x="140" y="530">SPRZEDANY</text>
                    </g>
                    <g id="id7Dom" onClick={()=>{
                        document.querySelector('#id7Tr').scrollIntoView({
                            behavior: 'smooth'
                        });
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
                        <path id="Zaznaczenie7"
                            fill="none" stroke="black"
                            d="M 384.00,333.00
           C 384.00,333.00 367.99,360.00 367.99,360.00
             367.99,360.00 327.60,429.00 327.60,429.00
             327.60,429.00 315.40,450.00 315.40,450.00
             309.75,459.53 306.02,462.57 306.00,474.00
             306.00,474.00 306.00,593.00 306.00,593.00
             306.00,595.31 306.22,598.63 304.98,600.62
             303.60,602.82 299.29,604.98 297.00,606.28
             297.00,606.28 280.00,615.85 280.00,615.85
             280.00,615.85 225.00,646.72 225.00,646.72
             225.00,646.72 197.00,663.00 197.00,663.00
             197.00,663.00 226.00,676.30 226.00,676.30
             226.00,676.30 288.00,703.86 288.00,703.86
             288.00,703.86 316.00,716.30 316.00,716.30
             318.46,717.42 328.01,721.93 330.00,722.14
             333.82,722.55 338.96,718.04 342.00,715.86
             342.00,715.86 370.00,695.86 370.00,695.86
             370.00,695.86 424.00,657.14 424.00,657.14
             427.95,654.31 439.83,646.87 441.40,642.91
             442.12,641.11 442.00,637.98 442.00,636.00
             442.00,636.00 442.00,602.00 442.00,602.00
             442.00,602.00 441.00,587.00 441.00,587.00
             441.00,587.00 441.00,557.00 441.00,557.00
             441.00,557.00 440.00,540.00 440.00,540.00
             440.00,540.00 440.00,510.00 440.00,510.00
             440.00,507.32 439.90,504.60 440.63,502.00
             440.63,502.00 453.58,477.00 453.58,477.00
             453.58,477.00 481.69,425.00 481.69,425.00
             481.69,425.00 501.69,388.00 501.69,388.00
             503.64,384.41 507.79,374.83 511.21,373.11
             513.80,371.80 525.45,373.74 529.00,373.98
             529.00,373.98 562.00,377.17 562.00,377.17
             562.00,377.17 582.00,379.00 582.00,379.00
             582.00,379.00 566.00,373.00 566.00,373.00
             566.00,373.00 539.00,364.00 539.00,364.00
             539.00,364.00 498.00,350.33 498.00,350.33
             498.00,350.33 476.00,343.32 476.00,343.32
             476.00,343.32 449.00,340.83 449.00,340.83
             449.00,340.83 423.00,338.17 423.00,338.17
             423.00,338.17 397.00,335.71 397.00,335.71
             397.00,335.71 384.00,333.00 384.00,333.00 Z" />
                        <text x="335" y="550">WOLNY</text>
                    </g>
                    <g id="id6Dom" onClick={()=>{
                        document.querySelector('#id6Tr').scrollIntoView({
                            behavior: 'smooth'
                        });
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
                        <path id="Zaznaczenie6"
                            fill="none" stroke="black"
                            d="M 340.00,727.00
           C 340.00,727.00 433.00,770.42 433.00,770.42
             433.00,770.42 455.00,780.76 455.00,780.76
             457.64,782.05 463.26,785.31 466.00,785.19
             469.27,785.04 475.16,780.03 478.00,778.00
             478.00,778.00 505.00,758.15 505.00,758.15
             505.00,758.15 543.00,730.37 543.00,730.37
             555.06,721.41 556.98,722.30 557.00,712.00
             557.00,712.00 557.00,579.00 557.00,579.00
             557.00,576.34 556.89,573.58 557.64,571.00
             557.64,571.00 573.00,543.00 573.00,543.00
             573.00,543.00 612.28,474.00 612.28,474.00
             612.28,474.00 624.85,452.00 624.85,452.00
             626.61,448.92 628.78,444.03 632.10,442.58
             632.10,442.58 648.00,439.87 648.00,439.87
             648.00,439.87 659.00,438.32 659.00,438.32
             659.00,438.32 680.00,440.58 680.00,440.58
             680.00,440.58 725.00,446.00 725.00,446.00
             720.50,443.33 713.18,442.05 708.00,440.57
             708.00,440.57 679.00,432.29 679.00,432.29
             679.00,432.29 634.00,419.58 634.00,419.58
             634.00,419.58 603.00,411.01 603.00,411.01
             603.00,411.01 574.00,406.87 574.00,406.87
             574.00,406.87 540.00,402.02 540.00,402.02
             536.86,401.70 530.21,400.20 527.63,402.02
             525.45,403.51 519.82,414.98 518.14,418.00
             518.14,418.00 496.70,457.00 496.70,457.00
             496.70,457.00 464.78,515.00 464.78,515.00
             464.78,515.00 453.65,536.00 453.65,536.00
             452.89,538.52 453.00,541.38 453.00,544.00
             453.00,544.00 453.00,566.00 453.00,566.00
             453.00,566.00 452.00,581.00 452.00,581.00
             452.00,581.00 452.00,636.00 452.00,636.00
             452.00,638.46 452.21,641.64 450.98,643.83
             449.48,646.51 444.58,649.56 442.00,651.42
             442.00,651.42 425.00,663.71 425.00,663.71
             425.00,663.71 364.00,707.63 364.00,707.63
             357.87,712.16 343.16,720.92 340.00,727.00 Z" />
                        <text x="470" y="600">WOLNY</text>
                    </g>
                    <g id="id5Dom" onClick={()=>{
                        document.querySelector('#id5Tr').scrollIntoView({
                            behavior: 'smooth'
                        });
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
                        <path id="Zaznaczenie5"
                            fill="none" stroke="black"
                            d="M 473.00,791.00
           C 473.00,791.00 537.00,814.81 537.00,814.81
             548.25,819.09 562.07,825.98 574.00,826.00
             574.00,826.00 750.00,826.00 750.00,826.00
             750.00,826.00 765.00,825.00 765.00,825.00
             765.00,825.00 845.00,825.00 845.00,825.00
             847.16,825.00 849.97,825.11 852.00,824.42
             855.40,823.25 864.66,815.28 868.00,812.60
             868.00,812.60 908.00,780.25 908.00,780.25
             908.00,780.25 1032.00,680.25 1032.00,680.25
             1032.00,680.25 1066.00,652.80 1066.00,652.80
             1071.81,648.11 1079.60,642.86 1084.00,637.00
             1084.00,637.00 997.00,601.01 997.00,601.01
             997.00,601.01 898.00,560.15 898.00,560.15
             898.00,560.15 858.00,543.60 858.00,543.60
             843.25,537.69 842.02,538.24 842.00,528.00
             842.00,528.00 842.00,500.00 842.00,500.00
             841.84,491.45 838.37,492.33 830.00,489.66
             830.00,489.66 797.00,478.98 797.00,478.98
             797.00,478.98 737.00,459.50 737.00,459.50
             737.00,459.50 680.00,452.72 680.00,452.72
             680.00,452.72 652.00,449.20 652.00,449.20
             649.04,448.64 641.90,446.77 639.33,448.11
             636.43,449.62 631.32,459.75 629.40,463.00
             629.40,463.00 605.58,504.00 605.58,504.00
             605.58,504.00 575.28,556.00 575.28,556.00
             573.07,559.89 565.21,572.72 564.14,576.00
             563.92,578.02 564.00,580.89 564.14,583.00
             564.14,583.00 564.14,713.00 564.14,713.00
             564.00,715.46 564.21,718.63 562.98,720.83
             561.21,723.99 544.99,735.37 541.00,738.37
             541.00,738.37 497.00,771.63 497.00,771.63
             490.50,776.50 477.58,785.14 473.00,791.00 Z" />
                        <text x="720" y="660">WOLNY</text>
                    </g>
                    <g id="id4Dom" onClick={()=>{
                        document.querySelector('#id4Tr').scrollIntoView({
                            behavior: 'smooth'
                        });
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
                            if (dom1e.classList.contains('activeDom')) dom1e.classList.remove('activeDom');
                        });
                    }}>
                        <path id="Zaznaczenie4"
                            fill="none" stroke="black"
                            d="M 378.00,287.00
           C 378.00,287.00 431.00,307.60 431.00,307.60
             431.00,307.60 523.00,344.00 523.00,344.00
             523.00,344.00 562.00,359.40 562.00,359.40
             565.48,360.79 575.83,365.59 579.00,365.11
             582.11,364.65 588.26,359.23 591.00,357.12
             591.00,357.12 619.00,335.42 619.00,335.42
             619.00,335.42 653.00,309.00 653.00,309.00
             661.47,302.34 665.98,301.96 666.13,291.00
             666.13,291.00 666.13,186.00 666.13,186.00
             666.00,183.81 665.93,181.12 666.13,179.00
             666.13,179.00 678.75,153.00 678.75,153.00
             678.75,153.00 708.75,93.00 708.75,93.00
             708.75,93.00 727.75,54.00 727.75,54.00
             729.60,50.31 734.63,38.95 737.39,36.85
             739.64,35.14 744.16,34.74 747.00,34.20
             753.30,32.98 759.58,31.30 766.00,31.00
             766.00,31.00 766.00,29.00 766.00,29.00
             766.00,29.00 706.00,13.58 706.00,13.58
             695.72,10.72 684.70,7.02 674.00,7.00
             674.00,7.00 642.00,7.00 642.00,7.00
             642.00,7.00 630.00,6.04 630.00,6.04
             630.00,6.04 615.00,6.04 615.00,6.04
             612.81,6.00 609.46,5.75 607.61,6.99
             605.58,8.35 602.88,13.73 601.58,16.00
             601.58,16.00 590.28,36.00 590.28,36.00
             590.28,36.00 552.42,103.00 552.42,103.00
             552.42,103.00 536.37,131.00 536.37,131.00
             530.17,139.56 504.02,163.41 495.00,172.04
             495.00,172.04 469.00,197.96 469.00,197.96
             469.00,197.96 410.00,255.00 410.00,255.00
             401.77,263.23 383.67,279.07 378.00,287.00 Z" />
                        <text x="530" y="220">WOLNY</text>
                    </g>
                    <g id="id3Dom" onClick={()=>{
                        document.querySelector('#id3Tr').scrollIntoView({
                            behavior: 'smooth'
                        });
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
                        <path id="Zaznaczenie3"
                            fill="none" stroke="black"
                            d="M 593.00,378.00
           C 593.00,378.00 666.00,411.30 666.00,411.30
             666.00,411.30 687.00,420.78 687.00,420.78
             689.45,421.93 695.51,425.06 698.00,425.08
             702.43,425.11 710.74,415.26 714.00,412.00
             714.00,412.00 755.00,371.00 755.00,371.00
             755.00,371.00 778.00,348.00 778.00,348.00
             786.38,339.62 790.98,338.14 791.00,326.00
             791.00,326.00 791.00,256.00 791.00,256.00
             791.00,256.00 792.00,239.00 792.00,239.00
             792.00,239.00 792.00,211.00 792.00,211.00
             792.00,208.33 791.90,205.60 792.63,203.00
             792.63,203.00 804.14,181.00 804.14,181.00
             804.14,181.00 831.69,131.00 831.69,131.00
             831.69,131.00 855.30,88.00 855.30,88.00
             857.35,84.28 863.57,71.89 866.38,69.98
             868.88,68.28 873.97,68.11 877.00,67.72
             877.00,67.72 900.00,65.00 900.00,65.00
             895.92,61.72 881.72,57.89 876.00,56.00
             876.00,56.00 838.00,43.98 838.00,43.98
             828.13,40.91 823.65,38.02 813.00,38.00
             813.00,38.00 762.00,38.00 762.00,38.00
             752.36,38.02 753.29,38.82 745.15,53.00
             745.15,53.00 721.60,93.00 721.60,93.00
             721.60,93.00 691.20,145.00 691.20,145.00
             688.67,149.23 679.31,164.33 678.14,168.00
             677.92,170.02 678.00,172.89 678.14,175.00
             678.14,175.00 678.14,297.00 678.14,297.00
             677.99,299.63 678.19,302.60 676.98,305.00
             674.89,309.13 660.38,320.43 656.00,324.08
             656.00,324.08 616.00,357.75 616.00,357.75
             610.57,362.30 596.86,373.32 593.00,378.00 Z" />
                        <text x="695" y="280">WOLNY</text>
                    </g>
                    <g id="id2Dom" onClick={()=>{
                        document.querySelector('#id2Tr').scrollIntoView({
                            behavior: 'smooth'
                        });
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
                        <path id="Zaznaczenie2"
                            fill="none" stroke="black"
                            d="M 723.00,428.00
           C 723.00,428.00 792.00,460.31 792.00,460.31
             792.00,460.31 808.00,468.00 808.00,468.00
             808.00,468.00 828.00,477.42 828.00,477.42
             830.50,478.51 834.29,480.72 837.00,480.21
             840.83,479.47 848.74,471.26 852.00,468.42
             852.00,468.42 890.00,434.03 890.00,434.03
             890.00,434.03 943.00,386.17 943.00,386.17
             946.83,382.72 959.93,371.95 961.40,368.00
             962.11,366.08 962.00,363.07 962.00,361.00
             962.00,361.00 962.00,286.00 962.00,286.00
             962.00,286.00 963.00,270.00 963.00,270.00
             963.00,270.00 963.00,239.00 963.00,239.00
             963.02,228.76 966.18,225.72 971.15,217.00
             971.15,217.00 984.70,193.00 984.70,193.00
             984.70,193.00 1023.42,124.00 1023.42,124.00
             1023.42,124.00 1044.00,87.00 1044.00,87.00
             1044.00,87.00 984.00,69.46 984.00,69.46
             984.00,69.46 941.00,65.83 941.00,65.83
             941.00,65.83 916.00,63.74 916.00,63.74
             916.00,63.74 905.33,63.74 905.33,63.74
             905.33,63.74 896.01,77.00 896.01,77.00
             896.01,77.00 873.99,115.00 873.99,115.00
             873.99,115.00 842.00,170.00 842.00,170.00
             842.00,170.00 829.14,193.00 829.14,193.00
             829.14,193.00 829.14,200.00 829.14,200.00
             829.14,200.00 829.14,280.00 829.14,280.00
             829.14,280.00 828.00,295.00 828.00,295.00
             828.00,295.00 828.00,330.00 828.00,330.00
             828.00,330.00 826.98,338.00 826.98,338.00
             826.98,338.00 819.00,346.13 819.00,346.13
             819.00,346.13 801.00,361.41 801.00,361.41
             801.00,361.41 747.00,406.87 747.00,406.87
             747.00,406.87 723.00,428.00 723.00,428.00 Z" />
                        <text x="830" y="320">REZERWACJA</text>
                    </g>
                    <g id="id1Dom" onClick={()=>{
                        document.querySelector('#id1Tr').scrollIntoView({
                            behavior: 'smooth'
                        });
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
                        <path id="Zaznaczenie1"
                            fill="none" stroke="black"
                            d="M 858.00,495.00
           C 858.00,495.00 877.00,503.42 877.00,503.42
             877.00,503.42 909.00,517.42 909.00,517.42
             909.00,517.42 1004.00,558.86 1004.00,558.86
             1004.00,558.86 1074.00,589.42 1074.00,589.42
             1074.00,589.42 1106.00,603.00 1106.00,603.00
             1106.00,603.00 1129.85,570.00 1129.85,570.00
             1129.85,570.00 1167.58,518.00 1167.58,518.00
             1167.58,518.00 1300.88,334.00 1300.88,334.00
             1300.88,334.00 1360.42,252.00 1360.42,252.00
             1360.42,252.00 1390.00,210.00 1390.00,210.00
             1390.00,210.00 1367.00,205.20 1367.00,205.20
             1367.00,205.20 1320.00,196.00 1320.00,196.00
             1320.00,196.00 1272.00,186.60 1272.00,186.60
             1272.00,186.60 1237.00,180.00 1237.00,180.00
             1237.00,180.00 1235.17,148.00 1235.17,148.00
             1234.87,144.83 1235.68,139.07 1233.40,136.84
             1231.65,135.12 1225.57,133.76 1223.00,132.98
             1223.00,132.98 1196.00,124.98 1196.00,124.98
             1196.00,124.98 1147.00,110.58 1147.00,110.58
             1147.00,110.58 1119.00,102.45 1119.00,102.45
             1119.00,102.45 1089.00,98.93 1089.00,98.93
             1089.00,98.93 1059.00,95.72 1059.00,95.72
             1055.48,95.28 1048.74,93.87 1045.96,96.57
             1045.96,96.57 1035.76,115.00 1035.76,115.00
             1035.76,115.00 1017.22,150.00 1017.22,150.00
             1017.22,150.00 986.24,208.00 986.24,208.00
             980.90,218.50 975.02,224.77 975.00,237.00
             975.00,237.00 975.00,269.00 975.00,269.00
             975.00,269.00 976.00,286.00 976.00,286.00
             976.00,286.00 976.00,363.00 976.00,363.00
             975.98,374.31 970.72,376.20 963.00,384.00
             963.00,384.00 945.00,403.00 945.00,403.00
             945.00,403.00 932.96,416.00 932.96,416.00
             932.96,416.00 892.96,458.00 892.96,458.00
             892.96,458.00 858.00,495.00 858.00,495.00 Z" />
                        <text x="1050" y="320">SPRZEDANY</text>
                    </g>
                </svg>
            </div>
        </section>
    );
}

export default Section2;