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
    constructor(t, e = 600, l = 450, i = "courier", o = 20) {
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
    setCId({
        t,
        w = 600,
        h = 450
    }) {
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
        text2: jn = "",
        coltxt: rr = "red"
    }) {
        var r = document.getElementById(t).getContext("2d");
        r.beginPath(), r.moveTo(e + h, l), r.arcTo(e + i, l, e + i, l + h, h), r.arcTo(e + i, l + o, e + i - h, l + o, h), r.arcTo(e, l + o, e, l + o - h, h), r.arcTo(e, l, e + h, l, h), r.closePath(), r.lineWidth = c, r.fillStyle = n, r.fill(), r.strokeStyle = s, r.stroke(), r.font = this.stytext, r.fillStyle = rr, r.textAlign = this.txtloc, r.textBaseline = "middle", r.fillText(a, e + i / 2, l + i / 2), r.fillText(jn, e + i / 2, 20 + l + i / 2)
    }

    drwcBox({
        cID = this.cID,
        x,
        y,
        radius = 100,
        lw = 5,
        bg = "pink",
        border = "black",
        coltxt: rr = "green",
        txt = "",
        txt2 = ""
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
        ctx.fillStyle = rr;
        ctx.fillText(txt, x + radius, y + radius);
        ctx.fillText(txt2, x + radius, 20 + y + radius)
        ctx.fillStyle = border;
    }
	dualDepot({
		x = 0,
		y = 0,
		circle = false,
		labdose = "DOSE",
		txtcol = "red",
		bgcol = "white",
		depottxt = "DEPOT1",
		depottxt2 = "(0)",
		depottxt3 = "DEPOT2",
		depottxt4 = "(1)"
	}){
		let cushion = 5;
        let boxw = 150;
        let boxh = 150;
        let linw = 120;
        let radiz = 6;
        let depotx = x + cushion;
        let depoty = y + cushion;
		
             this.drwLineLR({
                cID: this.cID,
                x: depotx + cushion,
                y: depoty + boxh/2,
                open: !1,
                arp: "right",
                hpos: "under",
                dash: !1,
                l: linw,
                txtmid: "DOSE",
                coltxt: txtcol
            })
			depotx = depotx + linw + 5
            if (circle) {
                this.drwcBox({
                    x: cushion,
                    y: depoty,
                    radius: boxw / 2,
                    lw: 4,
                    bg: bgcol,
                    txt: depottxt,
                    txt2: "V2",
                    txt2: depottxt2,
                    coltxt: txtcol
                })
            } else {
                this.drwBox({
                    cID: this.cID,
                    x: depotx,
                    y: depoty,
                    width: boxw,
                    height: boxh,
                    radius: radiz,
                    color1: "black",
                    linewidth: 2,
                    color2: bgcol,
                    text1: depottxt,
                    text2: depottxt2,
                    coltxt: txtcol
                })
            }
            this.drwLineST({
                cID: this.cID,
                x: depotx+boxw,
                y: depoty + boxh/2 -10,
                endy: depotx,
                length: linw*1.2,
                deg: 30,
                lc: "black",
                ahfc: "black",
                coltxt: "red",
                topstr: "",
                fixx: depotx + (boxw / 2) - 1,
                coltxt: txtcol,
				delm : true
            })

        depoty = depoty + boxh + 20
        
		 this.drwLineLR({
                cID: this.cID,
                x: depotx - linw,
                y: depoty + boxh/2,
                open: !1,
                arp: "right",
                hpos: "under",
                dash: !1,
                l: linw,
                txtmid: "DOSE",
                coltxt: txtcol
            })
		  
            if (circle) {
                this.drwcBox({
                    x: depotx,
                    y: depoty,
                    radius: boxw / 2,
                    lw: 4,
                    bg: bgcol,
                    txt: depottxt3,
                    txt2: depottxt4,
                    coltxt: txtcol
                })
            } else {
                this.drwBox({
                    cID: this.cID,
                    x: depotx,
                    y: depoty,
                    width: boxw,
                    height: boxh,
                    radius: radiz,
                    color1: "black",
                    linewidth: 2,
                    color2: bgcol,
                    text1: depottxt3,
                    text2: depottxt4,
                    coltxt: txtcol
                })
            }
            
			this.drwLineST({
                cID: this.cID,
                x: depotx+boxw,
                y: depoty + boxh/2 -10,
                endy: depotx,
                length: linw*1.2,
                deg: -30,
                lc: "black",
                ahfc: "black",
                coltxt: "red",
                topstr: "",
                fixx: depotx + (boxw / 2) - 1,
                coltxt: txtcol,
				delm : true
            })

		
	}
	
	oneDepot({
		cID,
		x,
		y,
		boxw,
		boxh,
		linw,
		radiz,
		cushion,
		circle = false,
		labdose = "DOSE",
		txtcol = "red",
		bgcol = "white",
		depottxt = "DEPOT1",
		depottxt2 = "(0)"
	}){
        let depotx = x ;
        let depoty = y;
		
		this.drwLineTB({
                    cID: cID,
                    x: depotx + (boxw / 2),
                    y: y,
                    length: linw,
                    lc: "black",
                    ahfc: "white",
                    ahbc: "black",
                    arp: "bottom",
                    txtmid: "",
                    topstr: labdose,
                    coltxt: txtcol
                }),
                depotx += linw + boxw + 3;
            depoty += linw + 20;
            if (circle) {
                this.drwcBox({
                    x: cushion,
                    y: depoty,
                    radius: boxw / 2,
                    lw: 4,
                    bg: bgcol,
                    txt: depottxt,
                    txt2: "V2",
                    txt2: depottxt2,
                    coltxt: txtcol
                })
            } else {
                this.drwBox({
                    cID: cID,
                    x: cushion,
                    y: depoty,
                    width: boxw,
                    height: boxh,
                    radius: radiz,
                    color1: "black",
                    linewidth: 2,
                    color2: bgcol,
                    text1: depottxt,
                    text2: depottxt2,
                    coltxt: txtcol
                })
            }
            this.drwLineLR({
                cID: cID,
                x: boxw + cushion,
                y: depoty + boxh/2,
                open: !1,
                arp: "right",
                hpos: "under",
                dash: !1,
                l: linw,
                txtmid: "Ka",
                coltxt: txtcol
            })
		return [depotx, depoty];
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
        endy: ey = 100,
        coltxt: rr = "green",
        delaybg: db = "gray",
        fixx: fx = 0,
        fixy: fy = 0,
		delay:dl = 0,
		mitxt: mit0 = "D2",
		mitxtl: mit = false
    }) {
        var ctx1 = document.getElementById(t).getContext("2d");
        (ctx1.fillStyle = rr), (ctx1.font = this.stytext), (ctx1.textAlign = this.txtloc), ctx1.fillText(a, e, l), ctx1.fillStyle = o;
        l += 10

        let arrwidth = 12;

        // Move to starting point of arrow
        ctx1.translate(e, l);

        // Rotate canvas by 75 degrees
        ctx1.rotate(dd * Math.PI / 180);

        // Draw arrow line
        ctx1.fillRect(0, 0, i, 2);

        // Draw arrowhead
        ctx1.beginPath();
        ctx1.moveTo(i, -arrwidth);
        ctx1.lineTo(i, arrwidth);
        ctx1.lineTo(i + 13, 0);
        ctx1.closePath();
        ctx1.fillStyle = hg; // Set arrow color
        ctx1.fill();
        ctx1.restore();
        ctx1.setTransform(1, 0, 0, 1, 0, 0);
		
		if(dl){
        // Draw the blue square at the midpoint with a black border
        var midX = ((e + i) / 2) + 5
        if (fx) midX = fx;
        var midY = (l + i) / 2;
        if (fy) midY = fy;
        var squareSize = 50;
        var squareSize = 15;
        ctx1.fillStyle = db;
        ctx1.strokeStyle = hg;
        ctx1.lineWidth = 1.5;
        ctx1.fillRect(midX - squareSize / 2, midY - squareSize / 2, squareSize, squareSize);
        ctx1.strokeRect(midX - squareSize / 2, midY - squareSize / 2, squareSize, squareSize);
		}
	if(dl | mit){
        // Draw the text "ALAGA" to the right of the square
        var text = mit0;
        ctx1.fillStyle = rr;
        ctx1.textAlign = "left"
        ctx1.fillText(text, midX + squareSize / 2 + 10, midY + 1);
		
		}
        ctx1.restore();

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
        txtmid: n = "Ke",
        topstr: a = "DOSE, at t = ALAG",
        hpos: r = "left",
        coltxt: rr = "red"
    }) {
        var d = document.getElementById(t).getContext("2d");
        let x = "left" != r ? e - 7 * n.length : e + 7 * n.length;
        if (n.length > 0 && (d.fillStyle = rr, d.font = this.stytext, d.textAlign = this.txtloc, d.fillText(n, x, l + i / 2), d.restore()), a.length > 0) {
            var _ = l + 10;
            l += 17, d.fillStyle = rr, d.font = this.stytext, d.textAlign = this.txtloc, d.fillText(a, e, _), d.restore()
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
        lw: r = 2,
        coltxt: rr = "purple"
    }) {
        var d = document.getElementById(t).getContext("2d");
        if (((d.lineWidth = r), a.length > 0)) {
            var x = e;
            (e += 7 * a.length), (d.fillStyle = rr), (d.font = this.stytext), (d.textAlign = this.txtloc), d.fillText(a, x, l), d.restore();
        }
        d.beginPath(), !0 == h && d.setLineDash([5, 5]), d.moveTo(e, l), d.lineTo(i + e, l), d.stroke(), d.setLineDash([0, 0]);
        var _ = 10,
            _ = 8;
        ("right" == s) | ("both" == s) && (d.beginPath(), d.moveTo(i + e, l), d.lineTo(i + e - _, l - _), d.lineTo(i + e - _, l + _), d.closePath(), (d.fillStyle = o ? "white" : "black"), d.fill(), d.stroke()),
        ("left" == s) | ("both" == s) && (d.beginPath(), d.moveTo(e, l), d.lineTo(e + _, l - _), d.lineTo(e + _, l + _), d.closePath(), (d.fillStyle = o ? "white" : "black"), d.fill(), d.stroke()),
        n.length > 0 && ((d.fillStyle = rr), (d.font = this.stytext), (d.textAlign = this.txtloc), d.fillText(n, e + i / 2, "up" == c ? l - 10 : l + 15), d.restore());
    }


    lib$1cmt({
        depot = true,
        bolus = true,
        labdose = "Dose",
        circle = true,
        depottxt = "DEPOT",
        centraltxt = "CENTRAL",
        depottxt2 = "(V1)",
        centraltxt2 = "(V2)",
        bgcol = "#f5f5f5",
        txtcol = "orange",
		delm = true
    }) {
        let cushion = 5;
        let boxw = 150;
        let boxh = 150;
        let linw = 120;
        let radiz = 6;
        let depotx = cushion;
        let depoty = cushion;
		
        if (depot) {
        
		let depotadd = this.oneDepot({
			cID: this.cID,
			x: depotx,
			y: depoty,
			boxw: boxw,
			boxh: boxh,
			linw: linw,
			radiz: radiz,
			circle: circle,
			labdose: "DOSE",
			txtcol: txtcol,
			bgcol: bgcol,
			depottxt: "DEPOT1",
			depottxt2: "(0)",
			cushion: cushion
		});
		
		depotx = depotadd[0];
		depoty = depotadd[1];

        }
        if (bolus) {
            depoty = cushion + linw + 19;
            this.drwLineST({
                cID: this.cID,
                x: depotx + (boxw / 2),
                y: cushion + 4,
                endy: depotx,
                length: linw - 10,
                deg: 90,
                lc: "black",
                ahfc: "black",
                coltxt: "red",
                topstr: "Bolus Dose",
                fixx: depotx + (boxw / 2) - 1,
                coltxt: txtcol
            })
        }
        if (circle) {
            this.drwcBox({
                x: depotx,
                y: depoty,
                radius: boxw / 2,
                lw: 4,
                bg: bgcol,
                txt: centraltxt,
                txt2: centraltxt2,
                coltxt: txtcol
            })
        } else {
            this.drwBox({
                cID: this.cID,
                x: depotx,
                y: depoty,
                width: boxw,
                height: boxh,
                radius: radiz,
                color1: "black",
                linewidth: 2,
                color2: bgcol,
                text1: centraltxt,
                text2: centraltxt2,
                coltxt: txtcol
            })
        }
		if(delm){
			this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2) -15,
            y: depoty + boxh,
            length: linw,
            lc: "black",
            ahfc: "black",
            ahbc: "black",
            arp: "bottom",
            txtmid: "CL ",
			hpos: "right",
            topstr: "",
            coltxt: txtcol
        })
		
		this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2) + 15,
            y: depoty + boxh,
            length: linw,
            lc: "black",
            ahfc: "black",
            ahbc: "black",
            arp: "bottom",
            txtmid: "Vmax/Km",
            topstr: "",
            coltxt: txtcol
        })
		}else{
        this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2),
            y: depoty + boxh,
            length: linw,
            lc: "black",
            ahfc: "black",
            ahbc: "black",
            arp: "bottom",
            txtmid: "Ke",
            topstr: "",
            coltxt: txtcol
        })}
    }



    lib$2cmt({
        depot = true,
        bolus = true,
        labdose = "Dose",
        circle = true,
        depottxt = "DEPOT",
        centraltxt = "CENTRAL",
        peritxt1 = "PERI1",
        bgcol = "#f5f5f5",
        txtcol = "black",
		delm = true
    }) {
        let cushion = 5;
        let boxw = 150;
        let boxh = 150;
        let linw = 120;
        let radiz = 6;
        let depotx = cushion;
        let depoty = cushion;

        this.setDim();
        if (depot) {
		let depotadd = this.oneDepot({
			cID: this.cID,
			x: depotx,
			y: depoty,
			boxw: boxw,
			boxh: boxh,
			linw: linw,
			radiz: radiz,
			circle: circle,
			labdose: "DOSE",
			txtcol: txtcol,
			bgcol: bgcol,
			depottxt: "DEPOT1",
			depottxt2: "(0)",
			cushion: cushion
		});
		
		depotx = depotadd[0];
		depoty = depotadd[1];
        }
        if (bolus) {
            depoty = cushion + linw + 19;
            this.drwLineST({
                cID: this.cID,
                x: depotx + (boxw / 2),
                y: cushion + 5,
                endy: depotx,
                length: linw - 10,
                deg: 90,
                lc: "black",
                ahfc: "black",
                coltxt: "red",
                topstr: "Bolus Dose",
                fixx: depotx + (boxw / 2) - 1,
                coltxt: txtcol
            })
        }
        if (circle) {
            this.drwcBox({
                x: depotx,
                y: depoty,
                radius: boxw / 2,
                lw: 4,
                bg: bgcol,
                border: txtcol,
                txt: centraltxt,
                coltxt: txtcol
            })
        } else {
            this.drwBox({
                cID: this.cID,
                x: depotx,
                y: depoty,
                width: boxw,
                height: boxh,
                radius: radiz,
                color1: "black",
                linewidth: 2,
                color2: bgcol,
                text1: centraltxt,
                coltxt: txtcol
            })
        }
		
		if(delm){
			this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2) -15,
            y: depoty + boxh,
            length: linw,
            lc: "black",
            ahfc: "black",
            ahbc: "black",
            arp: "bottom",
            txtmid: "CL ",
			hpos: "right",
            topstr: "",
            coltxt: txtcol
        })
		
		this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2) + 15,
            y: depoty + boxh,
            length: linw,
            lc: "black",
            ahfc: "black",
            ahbc: "black",
            arp: "bottom",
            txtmid: "Vmax/Km",
            topstr: "",
            coltxt: txtcol
        })
		}else{
        this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2),
            y: depoty + boxh,
            length: linw,
            lc: "black",
            ahfc: "black",
            ahbc: "black",
            arp: "bottom",
            txtmid: "Ke",
            topstr: "",
            coltxt: txtcol
        })
		
		}


        this.drwLineLR({
            cID: this.cID,
            x: depotx + boxw,
            y: 200,
            open: !1,
            arp: "right",
            hpos: "up",
            dash: !1,
            l: linw,
            txtmid: "K12",
            coltxt: txtcol
        })
        this.drwLineLR({
            cID: this.cID,
            x: depotx + boxw,
            y: 230,
            open: !1,
            arp: "left",
            hpos: "under",
            dash: !1,
            l: linw,
            txtmid: "K21",
            coltxt: txtcol
        })

        if (circle) {
            this.drwcBox({
                x: depotx + boxw + linw,
                y: depoty,
                radius: boxw / 2,
                lw: 4,
                bg: bgcol,
                border: txtcol,
                txt: peritxt1,
                coltxt: txtcol
            })
        } else {
            this.drwBox({
                cID: this.cID,
                x: depotx + boxw + linw,
                y: depoty,
                width: boxw,
                height: boxh,
                radius: radiz,
                color1: "black",
                linewidth: 2,
                color2: bgcol,
                text1: peritxt1,
                coltxt: txtcol
            })
        }

    }


    lib$3cmt({
        depot = true,
        bolus = true,
        labdose = "Dose",
        circle = true,
		delay = 0,
        depottxt = "DEPOT",
        centraltxt = "CENTRAL",
        peritxt1 = "PERI1",
        peritxt2 = "PERI2",
        bgcol = "#f5f5f5",
        txtcol = "black",
        coltxt: rr = "red",
		delm = true
    }) {
        let cushion = 5;
        let boxw = 150;
        let boxh = 150;
        let linw = 120;
        let radiz = 6;
        let depotx = cushion;
        let depoty = cushion + boxh - 18;

        this.setDim();

        if (depot) {
           let depotadd = this.oneDepot({
			cID: this.cID,
			x: depotx,
			y: depoty,
			boxw: boxw,
			boxh: boxh,
			linw: linw,
			radiz: radiz,
			circle: circle,
			labdose: "DOSE",
			txtcol: txtcol,
			bgcol: bgcol,
			depottxt: "DEPOT1",
			depottxt2: "(0)",
			cushion: cushion
		});
		
		depotx = depotadd[0];
		depoty = depotadd[1];

        }



        if (circle) {
            this.drwcBox({
                x: depotx,
                y: cushion,
                radius: boxw / 2,
                lw: 4,
                bg: bgcol,
                border: "black",
                txt: peritxt2,
				txt2: "(V3)",
                coltxt: txtcol
            })
        } else {
            this.drwBox({
                cID: this.cID,
                x: depotx,
                y: cushion,
                width: boxw,
                height: boxh,
                radius: radiz,
                color1: "black",
                linewidth: 2,
                color2: bgcol,
                text1: peritxt2,
				text2: "(V3)",
                coltxt: txtcol
            })
        }
        this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2) - 15,
            y: cushion + boxh,
            length: linw,
            hpos: "right",
            lc: "black",
            ahfc: "white",
            ahbc: "black",
            arp: "bottom",
            txtmid: "K31",
            topstr: "",
            coltxt: txtcol
        })
        this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2) + 15,
            y: cushion + boxh + 1,
            length: linw,
            hpos: "left",
            lc: "black",
            ahfc: "white",
            ahbc: "black",
            arp: "top",
            txtmid: "K13",
            topstr: "",
            coltxt: txtcol
        })



        if (circle) {
            this.drwcBox({
                x: depotx,
                y: depoty,
                radius: boxw / 2,
                lw: 4,
                bg: bgcol,
                border: "black",
                txt: centraltxt,
				txt2: "(V2)",
                coltxt: txtcol
            })
        } else {
            this.drwBox({
                cID: this.cID,
                x: depotx,
                y: depoty,
                width: boxw,
                height: boxh,
                radius: radiz,
                color1: "black",
                linewidth: 2,
                color2: bgcol,
                text1: centraltxt,
				text2: "(V2)",
                coltxt: txtcol
            })
        }
		
		if(delm){
			this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2) -15,
            y: depoty + boxh,
            length: linw,
            lc: "black",
            ahfc: "black",
            ahbc: "black",
            arp: "bottom",
            txtmid: "CL ",
			hpos: "right",
            topstr: "",
            coltxt: txtcol
        })
		
		this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2) + 15,
            y: depoty + boxh,
            length: linw,
            lc: "black",
            ahfc: "black",
            ahbc: "black",
            arp: "bottom",
            txtmid: "Vmax/Km",
            topstr: "",
            coltxt: txtcol
        })
		}else{
        this.drwLineTB({
            cID: this.cID,
            x: depotx + (boxw / 2),
            y: depoty + boxh,
            length: linw,
            lc: "black",
            ahfc: "black",
            ahbc: "black",
            arp: "bottom",
            txtmid: "Ke",
            topstr: "",
            coltxt: txtcol
        })
		}

        if (bolus) {
            depoty = cushion + linw + 19;
			
			if (circle) {
			this.drwLineST({
                cID: this.cID,
                x: cushion + 45 + boxw / 2,
                y: depoty - 100,
                endy: depotx,
                length: 258 + 28,
                deg: 55,
				delay: delay,
                lc: "black",
                ahfc: "black",
                topstr: "Dose",
                coltxt: txtcol,
				fixx:80+cushion + 45 + boxw / 2
            })	
			}else{
            this.drwLineST({
                cID: this.cID,
                x: cushion + 45 + boxw / 2,
                y: depoty - 100,
                endy: depotx,
                length: 258,
                deg: 55,
				delay: delay,
                lc: "black",
                ahfc: "black",
                topstr: "Dose",
                coltxt: txtcol
            })
				
			}
			
        }

        depoty = depoty * 2 - 15
        this.drwLineLR({
            cID: this.cID,
            x: depotx + boxw + 1,
            y: depoty - 15 + boxh / 2,
            open: !1,
            arp: "right",
            hpos: "up",
            dash: !1,
            l: linw,
            txtmid: "K21",
            coltxt: txtcol
        })
        this.drwLineLR({
            cID: this.cID,
            x: depotx + boxw + 2,
            y: depoty + 15 + boxh / 2,
            open: !1,
            arp: "left",
            hpos: "under",
            dash: !1,
            l: linw,
            txtmid: "K12",
            coltxt: txtcol
        })

        if (circle) {
            this.drwcBox({
                x: depotx + boxw + linw + 3,
                y: depoty,
                radius: boxw / 2,
                lw: 4,
                bg: bgcol,
                border: "black",
                txt: peritxt1,
				txt2: "(V4)",
                coltxt: txtcol
            })
        } else {
            this.drwBox({
                cID: this.cID,
                x: depotx + boxw + linw + 3,
                y: depoty,
                width: boxw,
                height: boxh,
                radius: radiz,
                color1: "black",
                linewidth: 2,
                color2: bgcol,
                text1: peritxt1,
				text2: "(V4)",
                coltxt: txtcol
            })
        }

    }
}