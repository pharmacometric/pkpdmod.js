function dwnLd({
    cID: t,
    type: e = "png",
    fname: l = "pfile1",
    scale: i = 3
}) {
    document.addEventListener("DOMContentLoaded", html2canvas(document.querySelector("#" + t), {
        scale: i
    }).then(t => {
        saveAs(t.toDataURL("image/" + e, 1), l + "." + e)
    }))
}
class PKPDmod {
    constructor(t, e = 600, l = 450, i = "courier", o = 18) {
        this.stytext = "bold " + o + "px " + i, this.txtloc = "center", this.cID = t, this.contw = e, this.conth = l, this.setDim()
    }
    setDim() {
        let t = document.getElementById(this.cID);
        t.width = this.contw, t.height = this.conth
    }
    attplug(t, e, l) {
        let i = t.createElement(e),
            o = t.getElementsByTagName(e)[0];
        i.src = l, o.parentNode.insertBefore(i, o)
    }
    setCId({t,w = 600, h = 450}) {
        this.cID = t, this.contw = w, this.conth = h, this.setDim()
    }
    drwBox({
        cID: t,
        x: e,
        y: l,
        width: i,
        height: o,
        radius: h,
        color1: s = "blue",
        linewidth: c = 5,
        color2: n = "red",
        text1: a = "DEPOT",
		text2: jn = "(V2)"
    }) {
        var r = document.getElementById(t).getContext("2d");
        r.beginPath(), r.moveTo(e + h, l), r.arcTo(e + i, l, e + i, l + h, h), r.arcTo(e + i, l + o, e + i - h, l + o, h), r.arcTo(e, l + o, e, l + o - h, h), r.arcTo(e, l, e + h, l, h), r.closePath(), r.lineWidth = c, r.fillStyle = n, r.fill(), r.strokeStyle = s, r.stroke(), r.font = this.stytext, r.fillStyle = s, r.textAlign = this.txtloc, r.textBaseline = "middle", r.fillText(a, e + i / 2, l + i / 2), r.fillText(jn, e + i / 2, 20 +l + i / 2)
    }

    drwcBox({
        cID = this.cID,
        x,
        y,
        radius = 100,
        lw = 5,
        bg = "pink",
        border = "black",
        txt = "",
		txt2 = "(V2)"
    }) {
        var canvas = document.getElementById(cID);
        var ctx = canvas.getContext("2d");

        // Draw the circle
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
        ctx.lineWidth = lw; // border width
        ctx.strokeStyle = border; // border color
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = bg;
        ctx.fill();

        // Draw the text
        ctx.font = this.stytext;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = border;
        ctx.fillText(txt, x + radius, y + radius);
		ctx.fillText(txt2, x + radius, 20 + y + radius)
    }
	drwLineST({
        cID: t,
        x: e,
        y: l,
		deg: dd,
        length: i,
        lc: o,
        ahfc: hg = "blue",
        topstr: a = "DOSE",
        hpos: r = "left",
		endy: ey = 100
    }) {
		var ctx1 = document.getElementById(t).getContext("2d");
        (ctx1.fillStyle = o), (ctx1.font = this.stytext), (ctx1.textAlign = this.txtloc), ctx1.fillText(a, e, l);
		l += 10
			
			let arrwidth  = 12;
			
			// Move to starting point of arrow
			ctx1.translate(e,l);

			// Rotate canvas by 75 degrees
			ctx1.rotate(dd * Math.PI / 180);

			// Draw arrow line
			ctx1.fillRect(0, 0, i, 2);

			// Draw arrowhead
			ctx1.beginPath();
			ctx1.moveTo(i, -arrwidth);
			ctx1.lineTo(i, arrwidth);
			ctx1.lineTo(i+13, 0);
			ctx1.closePath();
			ctx1.fillStyle = hg;// Set arrow color
			ctx1.fill(); 
			ctx1.restore();
			ctx1.setTransform(1, 0, 0, 1, 0, 0);
			// Draw the blue square at the midpoint with a black border
		var midX = ((e + i)/2)+5
		var midY = (l + i)/2
		var squareSize = 50;
        var squareSize = 15;
        ctx1.fillStyle = "gray";
        ctx1.strokeStyle = "black";
        ctx1.lineWidth = 1.5;
        ctx1.fillRect(midX - squareSize / 2, midY - squareSize / 2, squareSize, squareSize);
        ctx1.strokeRect(midX - squareSize / 2, midY - squareSize / 2, squareSize, squareSize);

        // Draw the text "ALAGA" to the right of the square
        var text = "D2";
        ctx1.fillStyle = "black";
		ctx1.textAlign = "right"
        ctx1.fillText(text, midX + squareSize / 2 + 30, midY + 1);
			
			
    }
    drwLineTB({
        cID: t,
        x: e,
        y: l,
        length: i,
        lc: o,
        ahfc: h,
        ahbc: s,
        arp: c = "top",
        txtmid: n = "K10",
        topstr: a = "DOSE, at t = ALAG",
        hpos: r = "left"
    }) {
        var d = document.getElementById(t).getContext("2d");
        let x = "left" != r ? e - 7 * n.length : e + 7 * n.length;
        if (n.length > 0 && (d.fillStyle = "black", d.font = this.stytext, d.textAlign = this.txtloc, d.fillText(n, x, l + i / 2)), a.length > 0) {
            var _ = l + 10;
            l += 17, d.fillStyle = "black", d.font = this.stytext, d.textAlign = this.txtloc, d.fillText(a, e, _)
        }
        d.beginPath(), d.moveTo(e, l), d.lineTo(e, l + i), d.lineWidth = 2, d.strokeStyle = o, d.stroke();
        var f = e,
            g = l + i,
            b = e,
            p = l;
        "bottom" == c && (d.beginPath(), d.moveTo(f, g), d.lineTo(f + 8, g - 8), d.lineTo(f - 8, g - 8), d.closePath(), d.fillStyle = h, d.fill(), d.strokeStyle = s, d.stroke()), 
		"top" == c && (d.beginPath(), d.moveTo(b, p), d.lineTo(b + 8, p + 8), d.lineTo(b - 8, p + 8), d.closePath(), d.fillStyle = h, d.fill(), d.strokeStyle = s, d.stroke())
    }
    drwLineLR({
        cID: t,
        x: e,
        y: l,
        l: i = 180,
        open: o = !0,
        dash: h = !1,
        arp: s = "left",
        hpos: c = "up",
        txtmid: n = "CLL",
        txttop: a = "",
        lw: r = 2
    }) {
    var d = document.getElementById(t).getContext("2d");
    if (((d.lineWidth = r), a.length > 0)) {
        var x = e;
        (e += 7 * a.length), (d.fillStyle = "black"), (d.font = this.stytext), (d.textAlign = this.txtloc), d.fillText(a, x, l);
    }
    d.beginPath(), !0 == h && d.setLineDash([5, 5]), d.moveTo(e, l), d.lineTo(i + e, l), d.stroke(), d.setLineDash([0, 0]);
    var _ = 10,
        _ = 8;
    ("right" == s) | ("both" == s) && (d.beginPath(), d.moveTo(i + e, l), d.lineTo(i + e - _, l - _), d.lineTo(i + e - _, l + _), d.closePath(), (d.fillStyle = o ? "white" : "black"), d.fill(), d.stroke()),
        ("left" == s) | ("both" == s) && (d.beginPath(), d.moveTo(e, l), d.lineTo(e + _, l - _), d.lineTo(e + _, l + _), d.closePath(), (d.fillStyle = o ? "white" : "black"), d.fill(), d.stroke()),
        n.length > 0 && ((d.fillStyle = "black"), (d.font = this.stytext), (d.textAlign = this.txtloc), d.fillText(n, e + i / 2, "up" == c ? l - 10 : l + 15));
}

	
    lib$1cmt({
        depot = true,
        bolus = true,
        labdose = "Dose",
        circle = true,
        depottxt = "DEPOT",
        centraltxt = "CENTRAL",
        bgcol = "#f5f5f5",
        txtcol = "black"
    }) {
        let cushion = 5; let boxw = 150; let boxh = 150; let linw = 120; let radiz = 6; let depotx = cushion; let depoty = cushion;
        if (depot) {
            this.drwLineTB({ cID: this.cID, x: depotx + (boxw / 2), y: cushion, length: linw, lc: "black", ahfc: "white", ahbc: "black", arp: "bottom", txtmid: "", topstr: labdose }),
                depotx += linw + boxw + 3;
            depoty += linw + 20;
            if (circle) {
               this.drwcBox({ x: cushion, y: depoty, radius: boxw / 2, lw: 4, bg: bgcol, border: txtcol, txt: depottxt }) 
            } else {
               this.drwBox({ cID: this.cID, x: cushion, y: depoty, width: boxw, height: boxh, radius: radiz, color1: txtcol, linewidth: 2, color2: bgcol, text1: depottxt })
            }
           this.drwLineLR({ cID: this.cID, x: boxw + cushion, y: 210, open: !1, arp: "right", hpos: "under", dash: !1, l: linw, txtmid: "Ka" })

        }
        if (bolus) {
            depoty = cushion + linw + 19;
            this.drwLineTB({ cID: this.cID, x: depotx + (boxw / 2), y: cushion, length: linw, lc: "black", ahfc: "white", ahbc: "black", arp: "bottom", txtmid: "", topstr: labdose })
        }
        if (circle) {
            this.drwcBox({ x: depotx, y: depoty, radius: boxw / 2, lw: 4, bg: bgcol, border: txtcol, txt: centraltxt })
        } else {
            this.drwBox({ cID: this.cID, x: depotx, y: depoty, width: boxw, height: boxh, radius: radiz, color1: "black", linewidth: 2, color2: bgcol, text1: centraltxt })
        }
        this.drwLineTB({ cID: this.cID, x: depotx + (boxw / 2), y: depoty + boxh, length: linw, lc: "black", ahfc: "black", ahbc: "black", arp: "bottom", txtmid: "K10", topstr: "" })
    }
	
	
	
	lib$2cmt({
        depot = true,
        bolus = true,
        labdose = "Dose",
        circle = true,
        depottxt = "DEPOT",
        centraltxt = "CENTRAL",
        bgcol = "#f5f5f5",
        txtcol = "black"
    }) {
        let cushion = 5; let boxw = 150; let boxh = 150; let linw = 120; let radiz = 6; let depotx = cushion; let depoty = cushion;
		
		this.setDim();
        if (depot) {
            this.drwLineTB({ cID: this.cID, x: depotx + (boxw / 2), y: cushion, length: linw, lc: "black", ahfc: "white", ahbc: "black", arp: "bottom", txtmid: "", topstr: labdose }),
                depotx += linw + boxw + 3;
            depoty += linw + 20;
            if (circle) {
               this.drwcBox({ x: cushion, y: depoty, radius: boxw / 2, lw: 4, bg: bgcol, border: txtcol, txt: depottxt }) 
            } else {
               this.drwBox({ cID: this.cID, x: cushion, y: depoty, width: boxw, height: boxh, radius: radiz, color1: txtcol, linewidth: 2, color2: bgcol, text1: depottxt })
            }
           this.drwLineLR({ cID: this.cID, x: boxw + cushion, y: 210, open: !1, arp: "right", hpos: "under", dash: !1, l: linw, txtmid: "Ka" })

        }
        if (bolus) {
            depoty = cushion + linw + 19;
            this.drwLineTB({ cID: this.cID, x: depotx + (boxw / 2), y: cushion, length: linw, lc: "black", ahfc: "white", ahbc: "black", arp: "bottom", txtmid: "", topstr: labdose })
        }
        if (circle) {
            this.drwcBox({ x: depotx, y: depoty, radius: boxw / 2, lw: 4, bg: bgcol, border: txtcol, txt: centraltxt })
        } else {
            this.drwBox({ cID: this.cID, x: depotx, y: depoty, width: boxw, height: boxh, radius: radiz, color1: "black", linewidth: 2, color2: bgcol, text1: centraltxt })
        }
        this.drwLineTB({ cID: this.cID, x: depotx + (boxw / 2), y: depoty + boxh, length: linw, lc: "black", ahfc: "black", ahbc: "black", arp: "bottom", txtmid: "K10", topstr: "" })
		
		
		this.drwLineLR({ cID: this.cID, x: depotx+boxw, y: 200, open: !1, arp: "right", hpos: "up", dash: !1, l: linw, txtmid: "K12" })
		this.drwLineLR({ cID: this.cID, x: depotx+boxw, y: 230, open: !1, arp: "left", hpos: "under", dash: !1, l: linw, txtmid: "K21" })
		
		if (circle) {
            this.drwcBox({ x: depotx+boxw+linw, y: depoty, radius: boxw / 2, lw: 4, bg: bgcol, border: txtcol, txt: centraltxt })
        } else {
            this.drwBox({ cID: this.cID, x: depotx+boxw+linw, y: depoty, width: boxw, height: boxh, radius: radiz, color1: "black", linewidth: 2, color2: bgcol, text1: centraltxt })
        }
		
    }
	
	
	lib$3cmt({
        depot = true,
        bolus = true,
        labdose = "Dose",
        circle = true,
        depottxt = "DEPOT",
        centraltxt = "CENTRAL 𝜏",
        bgcol = "#f5f5f5",
        txtcol = "black"
    }) {
        let cushion = 5; let boxw = 150; let boxh = 150; let linw = 120; let radiz = 6; let depotx = cushion; let depoty = cushion+boxh-18;
		
		this.setDim();
		
        if (depot) {
            this.drwLineTB({ cID: this.cID, x: depotx + (boxw / 2), y: depoty, length: linw, lc: "black", ahfc: "white", ahbc: "black", arp: "bottom", txtmid: "", topstr: labdose }),
                depotx += linw + boxw + 3;
            depoty += linw + 20;
            if (circle) {
               this.drwcBox({ x: cushion, y: depoty, radius: boxw / 2, lw: 4, bg: bgcol, border: txtcol, txt: depottxt }) 
            } else {
               this.drwBox({ cID: this.cID, x: cushion, y: depoty, width: boxw, height: boxh, radius: radiz, color1: txtcol, linewidth: 2, color2: bgcol, text1: depottxt })
            }
           this.drwLineLR({ cID: this.cID, x: boxw + cushion, y: depoty + boxh/2, open: !1, arp: "right", hpos: "under", dash: !1, l: linw, txtmid: "Ka" })

        }
        
		
		
		if (circle) {
            this.drwcBox({ x: depotx, y: cushion, radius: boxw / 2, lw: 4, bg: bgcol, border: txtcol, txt: centraltxt })
        } else {
            this.drwBox({ cID: this.cID, x: depotx, y: cushion, width: boxw, height: boxh, radius: radiz, color1: "black", linewidth: 2, color2: bgcol, text1: centraltxt })
        }
		this.drwLineTB({ cID: this.cID, x: depotx + (boxw / 2) - 15, y: cushion + boxh, length: linw, hpos: "right", lc: "black", ahfc: "white", ahbc: "black", arp: "bottom", txtmid: "K31", topstr: "" })
        this.drwLineTB({ cID: this.cID, x: depotx + (boxw / 2) + 15, y: cushion + boxh+1, length: linw, hpos: "left", lc: "black", ahfc: "white", ahbc: "black", arp: "top", txtmid: "K13", topstr: "" })
        
		
		
        if (circle) {
            this.drwcBox({ x: depotx, y: depoty, radius: boxw / 2, lw: 4, bg: bgcol, border: txtcol, txt: centraltxt })
        } else {
            this.drwBox({ cID: this.cID, x: depotx, y: depoty, width: boxw, height: boxh, radius: radiz, color1: "black", linewidth: 2, color2: bgcol, text1: centraltxt })
        }
        this.drwLineTB({ cID: this.cID, x: depotx + (boxw / 2), y: depoty + boxh, length: linw, lc: "black", ahfc: "black", ahbc: "black", arp: "bottom", txtmid: "K10", topstr: "" })
		
		if (bolus) {
            depoty = cushion + linw + 19;
            this.drwLineST({ cID: this.cID, x: cushion + 45 +  boxw/2, y: depoty - 100, endy:depotx, length: 260, deg: 55, lc: "black", ahfc: "black", topstr: "Bolus Dose" })
        }
		
		depoty = depoty * 2 - 15
		this.drwLineLR({ cID: this.cID, x: depotx+boxw+1, y: depoty -15 + boxh/2, open: !1, arp: "right", hpos: "up", dash: !1, l: linw, txtmid: "K21" })
		this.drwLineLR({ cID: this.cID, x: depotx+boxw+2, y: depoty +15 + boxh/2, open: !1, arp: "left", hpos: "under", dash: !1, l: linw, txtmid: "K12" })
		
		if (circle) {
            this.drwcBox({ x: depotx+boxw+linw+3, y: depoty, radius: boxw / 2, lw: 4, bg: bgcol, border: txtcol, txt: centraltxt })
        } else {
            this.drwBox({ cID: this.cID, x: depotx+boxw+linw+3, y: depoty, width: boxw, height: boxh, radius: radiz, color1: "black", linewidth: 2, color2: bgcol, text1: centraltxt })
        }
		
    }
}