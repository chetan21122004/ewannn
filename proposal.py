from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm, inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from reportlab.platypus import Flowable
from reportlab.graphics.shapes import Drawing, Rect, String, Line, Circle, Polygon
from reportlab.graphics.charts.barcharts import VerticalBarChart
from reportlab.graphics import renderPDF
import math

# ── BRAND PALETTE ──────────────────────────────────────────────────────────────
NAVY       = colors.HexColor("#0A1628")
NAVY_LIGHT = colors.HexColor("#112240")
ACCENT     = colors.HexColor("#2563EB")
ACCENT2    = colors.HexColor("#0EA5E9")
TEAL       = colors.HexColor("#0D9488")
GREEN      = colors.HexColor("#16A34A")
AMBER      = colors.HexColor("#D97706")
RED        = colors.HexColor("#DC2626")
PURPLE     = colors.HexColor("#7C3AED")

GRAY_50    = colors.HexColor("#F8FAFC")
GRAY_100   = colors.HexColor("#F1F5F9")
GRAY_200   = colors.HexColor("#E2E8F0")
GRAY_300   = colors.HexColor("#CBD5E1")
GRAY_500   = colors.HexColor("#64748B")
GRAY_700   = colors.HexColor("#334155")
GRAY_900   = colors.HexColor("#0F172A")

WHITE      = colors.white
BLACK      = colors.black

PAGE_W, PAGE_H = A4
MARGIN = 20 * mm
CONTENT_W = PAGE_W - 2 * MARGIN

# ── STYLES ─────────────────────────────────────────────────────────────────────
def make_styles():
    base = getSampleStyleSheet()
    def S(name, **kw):
        return ParagraphStyle(name, **kw)

    return {
        "cover_title": S("cover_title",
            fontName="Helvetica-Bold", fontSize=34, leading=42,
            textColor=WHITE, alignment=TA_LEFT, spaceAfter=8),
        "cover_sub": S("cover_sub",
            fontName="Helvetica", fontSize=14, leading=20,
            textColor=colors.HexColor("#93C5FD"), alignment=TA_LEFT),
        "cover_meta": S("cover_meta",
            fontName="Helvetica", fontSize=11, leading=16,
            textColor=colors.HexColor("#CBD5E1"), alignment=TA_LEFT),
        "section_label": S("section_label",
            fontName="Helvetica-Bold", fontSize=8, leading=10,
            textColor=ACCENT, spaceBefore=18, spaceAfter=4,
            letterSpacing=1.5),
        "h1": S("h1",
            fontName="Helvetica-Bold", fontSize=22, leading=28,
            textColor=NAVY, spaceBefore=6, spaceAfter=10),
        "h2": S("h2",
            fontName="Helvetica-Bold", fontSize=15, leading=20,
            textColor=NAVY, spaceBefore=14, spaceAfter=6),
        "h3": S("h3",
            fontName="Helvetica-Bold", fontSize=12, leading=16,
            textColor=GRAY_700, spaceBefore=10, spaceAfter=4),
        "body": S("body",
            fontName="Helvetica", fontSize=10, leading=16,
            textColor=GRAY_700, spaceAfter=6, alignment=TA_JUSTIFY),
        "body_sm": S("body_sm",
            fontName="Helvetica", fontSize=9, leading=14,
            textColor=GRAY_700, spaceAfter=4),
        "caption": S("caption",
            fontName="Helvetica", fontSize=8, leading=12,
            textColor=GRAY_500, spaceAfter=4),
        "tag": S("tag",
            fontName="Helvetica-Bold", fontSize=8, leading=10,
            textColor=WHITE, spaceAfter=0),
        "table_head": S("table_head",
            fontName="Helvetica-Bold", fontSize=9, leading=12,
            textColor=WHITE, alignment=TA_CENTER),
        "table_cell": S("table_cell",
            fontName="Helvetica", fontSize=9, leading=13,
            textColor=GRAY_700),
        "table_cell_bold": S("table_cell_bold",
            fontName="Helvetica-Bold", fontSize=9, leading=13,
            textColor=GRAY_900),
        "footer": S("footer",
            fontName="Helvetica", fontSize=8, leading=10,
            textColor=GRAY_500, alignment=TA_CENTER),
        "bullet": S("bullet",
            fontName="Helvetica", fontSize=10, leading=15,
            textColor=GRAY_700, leftIndent=14, spaceAfter=3,
            bulletIndent=0, bulletText=""),
        "phase_title": S("phase_title",
            fontName="Helvetica-Bold", fontSize=12, leading=16,
            textColor=WHITE),
        "phase_sub": S("phase_sub",
            fontName="Helvetica", fontSize=9, leading=13,
            textColor=colors.HexColor("#BFDBFE")),
        "metric_val": S("metric_val",
            fontName="Helvetica-Bold", fontSize=22, leading=26,
            textColor=ACCENT, alignment=TA_CENTER),
        "metric_lbl": S("metric_lbl",
            fontName="Helvetica", fontSize=8, leading=11,
            textColor=GRAY_500, alignment=TA_CENTER),
        "white_bold": S("white_bold",
            fontName="Helvetica-Bold", fontSize=10, leading=14,
            textColor=WHITE),
        "white_sm": S("white_sm",
            fontName="Helvetica", fontSize=8, leading=12,
            textColor=colors.HexColor("#BFDBFE")),
        "accent_bold": S("accent_bold",
            fontName="Helvetica-Bold", fontSize=10, leading=14,
            textColor=ACCENT),
        "green_bold": S("green_bold",
            fontName="Helvetica-Bold", fontSize=9, leading=12,
            textColor=GREEN),
        "red_sm": S("red_sm",
            fontName="Helvetica-Bold", fontSize=8, leading=11,
            textColor=RED),
    }

# ── CUSTOM FLOWABLES ────────────────────────────────────────────────────────────

class CoverPage(Flowable):
    def __init__(self, w, h):
        super().__init__()
        self.width = w
        self.height = h

    def draw(self):
        c = self.canv
        w, h = self.width, self.height

        # Deep navy background
        c.setFillColor(NAVY)
        c.rect(0, 0, w, h, fill=1, stroke=0)

        # Accent gradient strip (top)
        c.setFillColor(ACCENT)
        c.rect(0, h - 6, w, 6, fill=1, stroke=0)

        # Large decorative circle
        c.setFillColor(colors.HexColor("#112240"))
        c.circle(w - 30, h - 80, 160, fill=1, stroke=0)
        c.setFillColor(colors.HexColor("#1E3A5F"))
        c.circle(w - 30, h - 80, 110, fill=1, stroke=0)

        # Cross/plus decoration
        c.setStrokeColor(ACCENT)
        c.setLineWidth(1.5)
        for i in range(5):
            x = 30 + i * 28
            c.line(x, h - 30, x, h - 50)
            c.line(x - 10, h - 40, x + 10, h - 40)

        # Small dots pattern
        c.setFillColor(ACCENT)
        for row in range(4):
            for col in range(6):
                c.circle(40 + col * 22, 80 + row * 22, 2, fill=1, stroke=0)

        # Tag line box
        c.setFillColor(ACCENT)
        c.roundRect(MARGIN, h - 90, 160, 24, 4, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(MARGIN + 10, h - 82, "PROJECT PROPOSAL  v1.0")

        # Main title area
        title_y = h - 155
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 38)
        c.drawString(MARGIN, title_y, "MediCare")
        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 38)
        c.drawString(MARGIN + 145, title_y, "Connect")

        c.setFillColor(colors.HexColor("#93C5FD"))
        c.setFont("Helvetica", 14)
        c.drawString(MARGIN, title_y - 28, "A Full-Stack Healthcare & Medicine Delivery Platform")

        # Divider
        c.setStrokeColor(ACCENT)
        c.setLineWidth(2)
        c.line(MARGIN, title_y - 44, MARGIN + 80, title_y - 44)
        c.setStrokeColor(colors.HexColor("#1E3A5F"))
        c.line(MARGIN + 82, title_y - 44, MARGIN + 320, title_y - 44)

        # Stat boxes
        stats = [
            ("5 Phases", "Delivery plan"),
            ("iOS + Android", "Platform"),
            ("30k+ users", "Target scale"),
            ("6 months", "Full delivery"),
        ]
        box_w = (w - 2 * MARGIN - 3 * 8) / 4
        stat_y = title_y - 110
        for i, (val, lbl) in enumerate(stats):
            bx = MARGIN + i * (box_w + 8)
            c.setFillColor(colors.HexColor("#112240"))
            c.roundRect(bx, stat_y, box_w, 52, 6, fill=1, stroke=0)
            c.setStrokeColor(ACCENT)
            c.setLineWidth(0.5)
            c.roundRect(bx, stat_y, box_w, 52, 6, fill=0, stroke=1)
            c.setFillColor(ACCENT)
            c.setFont("Helvetica-Bold", 14)
            c.drawCentredString(bx + box_w / 2, stat_y + 30, val)
            c.setFillColor(colors.HexColor("#94A3B8"))
            c.setFont("Helvetica", 8)
            c.drawCentredString(bx + box_w / 2, stat_y + 16, lbl)

        # Platform tags
        tags = ["React Native", "Node.js + Express", "Supabase", "AWS Mumbai", "Razorpay"]
        tag_y = stat_y - 36
        tx = MARGIN
        c.setFillColor(colors.HexColor("#94A3B8"))
        c.setFont("Helvetica", 8)
        c.drawString(MARGIN, tag_y + 16, "TECH STACK")
        for tag in tags:
            tw = c.stringWidth(tag, "Helvetica-Bold", 8) + 16
            c.setFillColor(colors.HexColor("#1E3A5F"))
            c.roundRect(tx, tag_y - 2, tw, 16, 3, fill=1, stroke=0)
            c.setFillColor(colors.HexColor("#60A5FA"))
            c.setFont("Helvetica-Bold", 8)
            c.drawString(tx + 8, tag_y + 4, tag)
            tx += tw + 6

        # Bottom bar
        c.setFillColor(colors.HexColor("#0A1628"))
        c.rect(0, 0, w, 50, fill=1, stroke=0)
        c.setStrokeColor(colors.HexColor("#1E3A5F"))
        c.setLineWidth(0.5)
        c.line(0, 50, w, 50)
        c.setFillColor(colors.HexColor("#475569"))
        c.setFont("Helvetica", 8)
        c.drawString(MARGIN, 20, "Prepared for: Client")
        c.drawCentredString(w / 2, 20, "Confidential - Not for Distribution")
        c.drawRightString(w - MARGIN, 20, "2025")


class SectionDivider(Flowable):
    def __init__(self, label, color=ACCENT, w=CONTENT_W):
        super().__init__()
        self.label = label
        self.color = color
        self.width = w
        self.height = 36

    def draw(self):
        c = self.canv
        c.setFillColor(self.color)
        c.roundRect(0, 6, self.width, 26, 4, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(14, 14, self.label)


class PhaseTimeline(Flowable):
    def __init__(self, w=CONTENT_W):
        super().__init__()
        self.width = w
        self.height = 110

    def draw(self):
        c = self.canv
        phases = [
            ("Phase 1", "4–6 wks", "Core MVP", RED),
            ("Phase 2", "3–5 wks", "Healthcare", AMBER),
            ("Phase 3", "2–4 wks", "Chronic Care", GREEN),
            ("Phase 4", "2–3 wks", "AI & Smart", ACCENT),
            ("Phase 5", "2 wks", "Advanced", PURPLE),
        ]
        n = len(phases)
        bw = (self.width - (n - 1) * 6) / n

        for i, (ph, wks, label, col) in enumerate(phases):
            x = i * (bw + 6)

            # Shadow
            c.setFillColor(colors.HexColor("#E2E8F0"))
            c.roundRect(x + 2, 2, bw, 80, 8, fill=1, stroke=0)

            # Main box
            c.setFillColor(col)
            c.roundRect(x, 4, bw, 80, 8, fill=1, stroke=0)

            # Inner lighter top
            c.setFillColor(colors.Color(1, 1, 1, alpha=0.12))
            c.roundRect(x + 4, 48, bw - 8, 32, 6, fill=1, stroke=0)

            # Phase number
            c.setFillColor(WHITE)
            c.setFont("Helvetica-Bold", 11)
            c.drawCentredString(x + bw / 2, 62, ph)

            # Weeks badge
            c.setFillColor(colors.Color(0, 0, 0, alpha=0.2))
            c.roundRect(x + 8, 36, bw - 16, 16, 3, fill=1, stroke=0)
            c.setFillColor(WHITE)
            c.setFont("Helvetica-Bold", 8)
            c.drawCentredString(x + bw / 2, 41, wks)

            # Label
            c.setFillColor(colors.Color(1, 1, 1, alpha=0.85))
            c.setFont("Helvetica", 8)
            c.drawCentredString(x + bw / 2, 20, label)

            # Connector arrow
            if i < n - 1:
                ax = x + bw + 1
                ay = 44
                c.setFillColor(GRAY_300)
                c.setStrokeColor(GRAY_300)
                c.setLineWidth(0.5)
                c.line(ax, ay, ax + 4, ay)

        # Total timeline bar at bottom
        c.setFillColor(GRAY_100)
        c.roundRect(0, 0, self.width, 12, 3, fill=1, stroke=0)
        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 7)
        c.drawString(4, 3, "TOTAL DELIVERY TIMELINE: ~13–20 WEEKS  (8 hrs/day with AI tools)")


class InfraCard(Flowable):
    def __init__(self, tier, monthly_usd, monthly_inr, items, note, w=CONTENT_W):
        super().__init__()
        self.tier = tier
        self.monthly_usd = monthly_usd
        self.monthly_inr = monthly_inr
        self.items = items
        self.note = note
        self.width = w
        self.height = 30 + len(items) * 18 + 26

    def draw(self):
        c = self.canv
        h = self.height

        # Card BG
        c.setFillColor(GRAY_50)
        c.roundRect(0, 0, self.width, h, 8, fill=1, stroke=0)
        c.setStrokeColor(GRAY_200)
        c.setLineWidth(0.5)
        c.roundRect(0, 0, self.width, h, 8, fill=0, stroke=1)

        # Header strip
        c.setFillColor(NAVY)
        c.roundRect(0, h - 32, self.width, 32, 8, fill=1, stroke=0)
        c.rect(0, h - 32, self.width, 16, fill=1, stroke=0)

        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(12, h - 22, self.tier)

        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 13)
        c.drawRightString(self.width - 12, h - 22, f"${self.monthly_usd}/mo")

        c.setFillColor(colors.HexColor("#93C5FD"))
        c.setFont("Helvetica", 8)
        c.drawRightString(self.width - 12, h - 34, f"≈ {self.monthly_inr}")

        # Items
        for i, (service, spec, cost) in enumerate(self.items):
            iy = h - 50 - i * 18
            if i % 2 == 0:
                c.setFillColor(WHITE)
                c.rect(0, iy - 4, self.width, 18, fill=1, stroke=0)

            c.setFillColor(GRAY_900)
            c.setFont("Helvetica-Bold", 8)
            c.drawString(12, iy + 4, service)

            c.setFillColor(GRAY_500)
            c.setFont("Helvetica", 7)
            c.drawString(12, iy - 4, spec)

            c.setFillColor(NAVY)
            c.setFont("Helvetica-Bold", 9)
            c.drawRightString(self.width - 12, iy + 2, cost)

        # Note
        c.setFillColor(colors.HexColor("#EFF6FF"))
        c.rect(0, 0, self.width, 22, fill=1, stroke=0)
        c.roundRect(0, 0, self.width, 22, 8, fill=0, stroke=0)
        c.setFillColor(ACCENT)
        c.setFont("Helvetica", 7)
        c.drawString(10, 7, f"Note: {self.note}")


class StackRow(Flowable):
    def __init__(self, items, w=CONTENT_W):
        super().__init__()
        self.items = items
        self.width = w
        self.height = 60

    def draw(self):
        c = self.canv
        n = len(self.items)
        bw = (self.width - (n - 1) * 8) / n
        for i, (icon_label, title, desc, col) in enumerate(self.items):
            x = i * (bw + 8)
            c.setFillColor(col)
            c.roundRect(x, 0, bw, self.height, 6, fill=1, stroke=0)
            c.setFillColor(colors.Color(1, 1, 1, alpha=0.15))
            c.roundRect(x + 4, self.height - 22, bw - 8, 18, 4, fill=1, stroke=0)
            c.setFillColor(WHITE)
            c.setFont("Helvetica-Bold", 8)
            c.drawCentredString(x + bw / 2, self.height - 14, icon_label)
            c.setFont("Helvetica-Bold", 9)
            c.drawCentredString(x + bw / 2, self.height - 36, title)
            c.setFillColor(colors.Color(1, 1, 1, alpha=0.75))
            c.setFont("Helvetica", 7)
            c.drawCentredString(x + bw / 2, self.height - 49, desc)


class UIScreensChart(Flowable):
    def __init__(self, w=CONTENT_W):
        super().__init__()
        self.width = w
        self.height = 160

    def draw(self):
        c = self.canv
        phases = ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5"]
        interfaces = {
            "User App":     ([12, 8, 6, 4, 5], ACCENT),
            "Pharmacy":     ([6, 0, 3, 0, 0],  TEAL),
            "Admin Panel":  ([5, 5, 3, 2, 0],  AMBER),
            "Doctor Portal":([0, 5, 0, 0, 4],  PURPLE),
        }
        cumulative = [0] * 5
        bar_area_h = 110
        bar_area_y = 40
        max_total = 23
        bar_w = 36
        gap = (self.width - 5 * bar_w) / 6
        label_colors = [RED, AMBER, GREEN, ACCENT, PURPLE]

        # Y-axis
        c.setStrokeColor(GRAY_200)
        c.setLineWidth(0.5)
        for val in [5, 10, 15, 20]:
            y = bar_area_y + (val / max_total) * bar_area_h
            c.line(gap, y, self.width - gap, y)
            c.setFillColor(GRAY_500)
            c.setFont("Helvetica", 7)
            c.drawRightString(gap - 4, y - 3, str(val))

        # Bars
        for pi in range(5):
            bx = gap + pi * (bar_w + gap)
            stack_y = bar_area_y
            for iface, (counts, col) in interfaces.items():
                val = counts[pi]
                if val == 0:
                    continue
                bh = (val / max_total) * bar_area_h
                c.setFillColor(col)
                c.roundRect(bx, stack_y, bar_w, bh, 2, fill=1, stroke=0)
                if bh > 10:
                    c.setFillColor(WHITE)
                    c.setFont("Helvetica-Bold", 7)
                    c.drawCentredString(bx + bar_w / 2, stack_y + bh / 2 - 3, str(val))
                stack_y += bh

            # Phase label
            c.setFillColor(label_colors[pi])
            c.roundRect(bx, bar_area_y - 18, bar_w, 14, 3, fill=1, stroke=0)
            c.setFillColor(WHITE)
            c.setFont("Helvetica-Bold", 7)
            c.drawCentredString(bx + bar_w / 2, bar_area_y - 11, f"P{pi+1}")

        # Legend
        lx = gap
        ly = self.height - 10
        for iface, (_, col) in interfaces.items():
            c.setFillColor(col)
            c.roundRect(lx, ly - 6, 8, 8, 1, fill=1, stroke=0)
            c.setFillColor(GRAY_700)
            c.setFont("Helvetica", 7)
            c.drawString(lx + 11, ly - 3, iface)
            lx += c.stringWidth(iface, "Helvetica", 7) + 26

        # Title
        c.setFillColor(GRAY_900)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(0, self.height - 12, "Screens by interface per phase")
        c.setFillColor(GRAY_500)
        c.setFont("Helvetica", 7)
        c.drawRightString(self.width, self.height - 12, "Total: 58 screens across all phases")


class LegalItem(Flowable):
    def __init__(self, title, desc, severity, w=CONTENT_W):
        super().__init__()
        self.title = title
        self.desc = desc
        self.severity = severity  # "critical", "important", "strategic"
        self.width = w
        self.height = 52

    def draw(self):
        c = self.canv
        colors_map = {
            "critical":   (RED,    "#FEF2F2", "#FCA5A5"),
            "important":  (AMBER,  "#FFFBEB", "#FCD34D"),
            "strategic":  (ACCENT, "#EFF6FF", "#93C5FD"),
        }
        col, bg, stripe = colors_map[self.severity]

        c.setFillColor(colors.HexColor(bg))
        c.roundRect(0, 0, self.width, self.height, 6, fill=1, stroke=0)
        c.setFillColor(colors.HexColor(stripe))
        c.roundRect(0, 0, 5, self.height, 3, fill=1, stroke=0)
        c.rect(3, 0, 2, self.height, fill=1, stroke=0)

        badge_labels = {"critical": "MANDATORY", "important": "REQUIRED", "strategic": "STRATEGIC"}
        c.setFillColor(col)
        bw = c.stringWidth(badge_labels[self.severity], "Helvetica-Bold", 7) + 12
        c.roundRect(self.width - bw - 8, self.height - 18, bw, 14, 3, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 7)
        c.drawString(self.width - bw - 2, self.height - 12, badge_labels[self.severity])

        c.setFillColor(GRAY_900)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(14, self.height - 16, self.title)

        c.setFillColor(GRAY_700)
        c.setFont("Helvetica", 8)
        # wrap desc manually
        max_w = self.width - 28
        words = self.desc.split()
        line = ""
        lines = []
        for w in words:
            test = line + " " + w if line else w
            if c.stringWidth(test, "Helvetica", 8) < max_w:
                line = test
            else:
                lines.append(line)
                line = w
        if line:
            lines.append(line)
        for i, ln in enumerate(lines[:2]):
            c.drawString(14, self.height - 30 - i * 12, ln)


class MilestoneBar(Flowable):
    def __init__(self, w=CONTENT_W):
        super().__init__()
        self.width = w
        self.height = 70

    def draw(self):
        c = self.canv
        milestones = [
            ("Week 0", "Kickoff + Advance", "25%", NAVY),
            ("Week 4", "Working Demo", "15%", ACCENT),
            ("Week 6", "Phase 1 Live", "20%", GREEN),
            ("Week 11", "Phase 2 Done", "15%", TEAL),
            ("Week 15", "Phase 3 Done", "10%", AMBER),
            ("Week 24", "Full Handover", "15%", PURPLE),
        ]
        n = len(milestones)
        spacing = self.width / (n - 1)

        # Connecting line
        c.setStrokeColor(GRAY_200)
        c.setLineWidth(2)
        c.line(0, 38, self.width, 38)

        for i, (week, label, pct, col) in enumerate(milestones):
            x = i * spacing

            # Circle
            c.setFillColor(col)
            c.circle(x, 38, 10, fill=1, stroke=0)
            c.setFillColor(WHITE)
            c.setFont("Helvetica-Bold", 7)
            c.drawCentredString(x, 35, pct)

            # Week above
            c.setFillColor(GRAY_500)
            c.setFont("Helvetica", 7)
            c.drawCentredString(x, 52, week)

            # Label below (alternating)
            c.setFillColor(col)
            c.setFont("Helvetica-Bold", 7)
            if i % 2 == 0:
                c.drawCentredString(x, 20, label)
            else:
                c.drawCentredString(x, 8, label)


# ── DOCUMENT BUILDER ────────────────────────────────────────────────────────────

def header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    # Header line
    canvas.setStrokeColor(GRAY_200)
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN, h - 14 * mm, w - MARGIN, h - 14 * mm)
    canvas.setFillColor(GRAY_500)
    canvas.setFont("Helvetica", 7)
    canvas.drawString(MARGIN, h - 12 * mm, "MediCare Connect - Project Proposal")
    canvas.drawRightString(w - MARGIN, h - 12 * mm, f"Page {doc.page}")
    # Footer
    canvas.setStrokeColor(GRAY_200)
    canvas.line(MARGIN, 14 * mm, w - MARGIN, 14 * mm)
    canvas.setFillColor(GRAY_500)
    canvas.setFont("Helvetica", 7)
    canvas.drawCentredString(w / 2, 10 * mm, "Confidential - Prepared for client review only")
    canvas.restoreState()


def build_proposal():
    S = make_styles()
    output_path = "MediCare_Connect_Proposal.pdf"
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=18 * mm, bottomMargin=18 * mm,
        title="MediCare Connect - Project Proposal",
        author="Development Team",
    )

    story = []

    def gap(h=6): return Spacer(1, h)
    def HR(col=GRAY_200, t=0.5): return HRFlowable(width="100%", thickness=t, color=col, spaceAfter=6, spaceBefore=6)

    def bullet_item(text, style=S["body_sm"]):
        return Paragraph(f'<bullet bulletIndent="0" bulletFontName="Helvetica" bulletFontSize="9" bulletColor="#2563EB">&#8226;</bullet> {text}', style)

    def info_box(text, col=ACCENT, bg="#EFF6FF"):
        data = [[Paragraph(text, S["body_sm"])]]
        t = Table(data, colWidths=[CONTENT_W - 20])
        t.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor(bg)),
            ("LEFTPADDING", (0, 0), (-1, -1), 12),
            ("RIGHTPADDING", (0, 0), (-1, -1), 12),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ("LINEAFTER", (0, 0), (0, -1), 3, colors.HexColor(col) if isinstance(col, str) else col),
            ("LINEBEFORE", (0, 0), (0, -1), 3, colors.HexColor(col) if isinstance(col, str) else col),
            ("ROUNDEDCORNERS", [6]),
        ]))
        return t

    # ── PAGE 1: COVER ──────────────────────────────────────────────────────────
    # Keep the cover inside the frame dimensions to avoid LayoutError.
    story.append(CoverPage(doc.width - 12, doc.height - 12))
    story.append(PageBreak())

    # ── PAGE 2: EXECUTIVE SUMMARY ──────────────────────────────────────────────
    story.append(SectionDivider("01   EXECUTIVE SUMMARY"))
    story.append(gap(10))
    story.append(Paragraph("Project Overview", S["h1"]))
    story.append(Paragraph(
        "This proposal outlines the complete development plan for <b>MediCare Connect</b> - "
        "a full-featured healthcare and medicine delivery platform for iOS and Android. "
        "The platform is designed to serve patients, partner pharmacies, hospitals, and doctors "
        "through a phased delivery model, launching life-saving features first and expanding "
        "into AI-powered healthcare services.",
        S["body"]))
    story.append(gap(8))

    # Key metrics row
    metrics = [
        ("5", "Development phases"),
        ("4", "User interfaces"),
        ("58+", "Total screens"),
        ("30k", "Target users/month"),
        ("6 mo", "Full delivery"),
    ]
    metric_data = [[Paragraph(v, S["metric_val"]) for v, _ in metrics],
                   [Paragraph(l, S["metric_lbl"]) for _, l in metrics]]
    mt = Table(metric_data, colWidths=[CONTENT_W / 5] * 5)
    mt.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), GRAY_50),
        ("BOX", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("ROUNDEDCORNERS", [8]),
    ]))
    story.append(mt)
    story.append(gap(14))

    story.append(Paragraph("What We Are Building", S["h2"]))
    story.append(Paragraph(
        "MediCare Connect is structured as five progressive phases. Each phase is independently "
        "deliverable, functional, and adds measurable value to the platform. The client can "
        "choose to launch after any phase.",
        S["body"]))
    story.append(gap(8))
    story.append(PhaseTimeline(CONTENT_W))
    story.append(gap(14))

    story.append(Paragraph("Scope at a Glance", S["h2"]))
    scope_rows = [
        [Paragraph("Interface", S["table_head"]), Paragraph("Type", S["table_head"]),
         Paragraph("Phases", S["table_head"]), Paragraph("Screens", S["table_head"])],
        [Paragraph("User Mobile App", S["table_cell_bold"]), Paragraph("React Native iOS + Android", S["table_cell"]),
         Paragraph("All 5 phases", S["table_cell"]), Paragraph("35", S["table_cell"])],
        [Paragraph("Pharmacy Partner Panel", S["table_cell_bold"]), Paragraph("Web dashboard", S["table_cell"]),
         Paragraph("Phase 1, 3", S["table_cell"]), Paragraph("9", S["table_cell"])],
        [Paragraph("Super Admin Panel", S["table_cell_bold"]), Paragraph("Web dashboard", S["table_cell"]),
         Paragraph("Phase 1–4", S["table_cell"]), Paragraph("15", S["table_cell"])],
        [Paragraph("Doctor Portal", S["table_cell_bold"]), Paragraph("Web dashboard", S["table_cell"]),
         Paragraph("Phase 2, 5", S["table_cell"]), Paragraph("9", S["table_cell"])],
    ]
    col_w = [CONTENT_W * x for x in [0.28, 0.35, 0.22, 0.15]]
    scope_t = Table(scope_rows, colWidths=col_w)
    scope_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("BACKGROUND", (0, 1), (-1, 1), WHITE),
        ("BACKGROUND", (0, 2), (-1, 2), GRAY_50),
        ("BACKGROUND", (0, 3), (-1, 3), WHITE),
        ("BACKGROUND", (0, 4), (-1, 4), GRAY_50),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("ALIGN", (0, 0), (-1, -1), "LEFT"),
        ("ALIGN", (3, 0), (3, -1), "CENTER"),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("ROUNDEDCORNERS", [6]),
    ]))
    story.append(scope_t)
    story.append(PageBreak())

    # ── PAGE 3: TECH STACK ─────────────────────────────────────────────────────
    story.append(SectionDivider("02   TECHNOLOGY STACK", TEAL))
    story.append(gap(10))
    story.append(Paragraph("Recommended Technology Stack", S["h1"]))
    story.append(Paragraph(
        "Every technology in this stack has been selected for three reasons: suitability for a "
        "solo developer workflow, scalability to 100k+ users without architectural changes, "
        "and compliance with Indian data protection regulations (DPDP Act 2023).",
        S["body"]))
    story.append(gap(10))

    story.append(StackRow([
        ("MOBILE", "React Native + Expo", "iOS & Android", ACCENT),
        ("BACKEND", "Express + TypeScript", "REST API + Logic", NAVY),
        ("DATABASE", "Supabase (self-hosted)", "Postgres + Auth + Realtime", TEAL),
    ], CONTENT_W))
    story.append(gap(8))
    story.append(StackRow([
        ("CACHE", "Redis (ElastiCache)", "OTP, Sessions, Tracking", AMBER),
        ("STORAGE", "AWS S3 Mumbai", "Prescriptions + Images", RED),
        ("PUSH", "Firebase FCM", "Notifications + Alerts", colors.HexColor("#F59E0B")),
        ("PAYMENTS", "Razorpay", "Orders + Subscriptions", GREEN),
    ], CONTENT_W))
    story.append(gap(8))
    story.append(StackRow([
        ("CDN", "AWS CloudFront", "Fast asset delivery", PURPLE),
        ("INFRA", "AWS Mumbai (ap-south-1)", "DPDP compliant hosting", NAVY_LIGHT),
        ("DEPLOY", "Docker on EC2", "Containerised backend", GRAY_700),
    ], CONTENT_W))
    story.append(gap(14))

    story.append(info_box(
        "<b>Why self-hosted Supabase on AWS Mumbai?</b> Supabase Cloud has no India region (nearest is Singapore). "
        "Under India's DPDP Act 2023, health data including prescriptions and patient profiles must be stored in India. "
        "Self-hosting Supabase on AWS ap-south-1 gives us full Supabase developer experience while remaining 100% compliant.",
        TEAL, "#F0FDF4"))
    story.append(gap(14))

    story.append(Paragraph("Architecture Overview", S["h2"]))
    arch_rows = [
        [Paragraph("Layer", S["table_head"]), Paragraph("Technology", S["table_head"]),
         Paragraph("Purpose", S["table_head"]), Paragraph("Scalability", S["table_head"])],
        [Paragraph("Mobile client", S["table_cell_bold"]), Paragraph("React Native + Expo", S["table_cell"]),
         Paragraph("iOS & Android apps", S["table_cell"]), Paragraph("App-level, independent", S["table_cell"])],
        [Paragraph("API server", S["table_cell_bold"]), Paragraph("Express + TypeScript + Docker", S["table_cell"]),
         Paragraph("Business logic, routing", S["table_cell"]), Paragraph("Horizontal via AWS ALB", S["table_cell"])],
        [Paragraph("Database", S["table_cell_bold"]), Paragraph("Postgres (Supabase)", S["table_cell"]),
         Paragraph("All persistent data", S["table_cell"]), Paragraph("Read replicas at 60k+", S["table_cell"])],
        [Paragraph("Cache", S["table_cell_bold"]), Paragraph("Redis (ElastiCache)", S["table_cell"]),
         Paragraph("OTP, sessions, stock", S["table_cell"]), Paragraph("Cluster at 100k+", S["table_cell"])],
        [Paragraph("File storage", S["table_cell_bold"]), Paragraph("AWS S3 + CloudFront", S["table_cell"]),
         Paragraph("Prescriptions, images", S["table_cell"]), Paragraph("Unlimited, managed", S["table_cell"])],
        [Paragraph("Notifications", S["table_cell_bold"]), Paragraph("Firebase FCM", S["table_cell"]),
         Paragraph("Push alerts, reminders", S["table_cell"]), Paragraph("1M free/month", S["table_cell"])],
    ]
    arch_cw = [CONTENT_W * x for x in [0.20, 0.25, 0.30, 0.25]]
    arch_t = Table(arch_rows, colWidths=arch_cw)
    arch_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, GRAY_50]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("ROUNDEDCORNERS", [6]),
    ]))
    story.append(arch_t)
    story.append(PageBreak())

    # ── PAGE 4: PHASE 1 ────────────────────────────────────────────────────────
    story.append(SectionDivider("03   PHASE 1 - CORE MVP  (Weeks 1–6)", RED))
    story.append(gap(10))
    story.append(Paragraph("Medicine Delivery + Emergency Features", S["h1"]))
    story.append(Paragraph(
        "Phase 1 is the most critical delivery. It focuses exclusively on life-saving and "
        "high-demand features. At the end of Phase 1, the platform is fully functional, "
        "live on the App Store and Play Store, and generating real orders.",
        S["body"]))
    story.append(gap(10))

    # Timeline
    wk_rows = [
        [Paragraph("Week", S["table_head"]), Paragraph("Deliverable", S["table_head"]),
         Paragraph("Key tasks", S["table_head"])],
        [Paragraph("1", S["table_cell_bold"]), Paragraph("Foundation", S["table_cell_bold"]),
         Paragraph("Supabase on AWS Mumbai, Express boilerplate, DB schema, OTP auth, project setup", S["table_cell"])],
        [Paragraph("2", S["table_cell_bold"]), Paragraph("App shell + search", S["table_cell_bold"]),
         Paragraph("React Native navigation, onboarding screens, medicine search UI, pharmacy listings", S["table_cell"])],
        [Paragraph("3", S["table_cell_bold"]), Paragraph("Rx + Pharmacy map", S["table_cell_bold"]),
         Paragraph("Prescription upload to S3, nearby pharmacy map (Google Maps SDK), stock display", S["table_cell"])],
        [Paragraph("4", S["table_cell_bold"]), Paragraph("Orders + Payment", S["table_cell_bold"]),
         Paragraph("Cart, checkout, Razorpay integration, order confirmation, real-time tracking via Redis", S["table_cell"])],
        [Paragraph("5", S["table_cell_bold"]), Paragraph("Emergency + Admin", S["table_cell_bold"]),
         Paragraph("Emergency contacts module, FCM push notifications, pharmacy admin panel, super admin panel", S["table_cell"])],
        [Paragraph("6", S["table_cell_bold"]), Paragraph("QA + Launch", S["table_cell_bold"]),
         Paragraph("Full QA pass, bug fixes, App Store + Play Store submission, client demo and sign-off", S["table_cell"])],
    ]
    wk_cw = [CONTENT_W * x for x in [0.08, 0.22, 0.70]]
    wk_t = Table(wk_rows, colWidths=wk_cw)
    wk_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#DC2626")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, GRAY_50]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ROUNDEDCORNERS", [6]),
    ]))
    story.append(wk_t)
    story.append(gap(12))

    story.append(Paragraph("Phase 1 - User Interface Screens", S["h2"]))
    p1_screens = [
        ["Splash & onboarding", "OTP login / signup", "Home dashboard", "Medicine search"],
        ["Medicine detail", "Upload prescription", "Nearby pharmacies map", "Cart + checkout"],
        ["Order tracking (live)", "Order history", "Emergency contacts", "Basic user profile"],
    ]
    p1_cw = [CONTENT_W / 4] * 4
    p1_data = []
    for row in p1_screens:
        p1_data.append([Paragraph(f"&#8226; {r}", S["body_sm"]) for r in row])
    p1_t = Table(p1_data, colWidths=p1_cw)
    p1_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#FEF2F2")),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#FECACA")),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("ROUNDEDCORNERS", [4]),
    ]))
    story.append(p1_t)
    story.append(gap(6))

    story.append(Paragraph("Phase 1 also includes (web panels):", S["h3"]))
    web_rows = [
        [Paragraph("Pharmacy Panel (6 screens)", S["table_cell_bold"]),
         Paragraph("Login, orders queue, order detail + accept, inventory management, stock update, earnings summary", S["table_cell"])],
        [Paragraph("Admin Panel (5 screens)", S["table_cell_bold"]),
         Paragraph("Admin login, dashboard overview, approve pharmacies, all orders view, user management", S["table_cell"])],
    ]
    web_t = Table(web_rows, colWidths=[CONTENT_W * 0.28, CONTENT_W * 0.72])
    web_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), GRAY_50),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(web_t)
    story.append(gap(12))

    story.append(Paragraph("Phase 1 Infrastructure Cost", S["h2"]))
    story.append(InfraCard(
        "Phase 1 (0–10k users)", "$40", "≈ ₹3,300/month",
        [
            ("EC2 t3.small", "Supabase + Express on single instance", "~$17"),
            ("ElastiCache Redis t3.micro", "OTP, sessions, order tracking cache", "~$12"),
            ("AWS S3 + CloudFront", "~10GB prescription storage", "~$3"),
            ("Firebase FCM", "Push notifications - up to 1M free/month", "$0"),
            ("SMS OTP - MSG91", "~5,000 OTPs/month at ₹0.18/SMS", "~$5"),
            ("Razorpay", "2% per transaction - no monthly fee", "Usage"),
        ],
        "Run Supabase and Express on the same EC2 to minimise cost at this stage.",
        CONTENT_W))
    story.append(PageBreak())

    # ── PAGE 5: PHASE 2 ────────────────────────────────────────────────────────
    story.append(SectionDivider("04   PHASE 2 - HEALTHCARE ACCESS  (Weeks 7–11)", AMBER))
    story.append(gap(10))
    story.append(Paragraph("Hospital Beds + Doctor Directory + Appointments", S["h1"]))
    story.append(Paragraph(
        "Phase 2 expands the platform beyond medicine delivery into full healthcare access. "
        "Users can find hospital beds, search doctors by specialization, and book appointments "
        "online. The Doctor Portal is introduced in this phase.",
        S["body"]))
    story.append(gap(10))

    p2_wk = [
        [Paragraph("Week", S["table_head"]), Paragraph("Deliverable", S["table_head"]), Paragraph("Key tasks", S["table_head"])],
        [Paragraph("7", S["table_cell_bold"]), Paragraph("Hospital beds", S["table_cell_bold"]),
         Paragraph("Hospital bed availability API + UI, ICU vs general beds, real-time updates via admin input", S["table_cell"])],
        [Paragraph("8", S["table_cell_bold"]), Paragraph("Doctor directory", S["table_cell_bold"]),
         Paragraph("Doctor profiles, specialization-wise search, contact details, Doctor Portal setup", S["table_cell"])],
        [Paragraph("9", S["table_cell_bold"]), Paragraph("Appointment booking", S["table_cell_bold"]),
         Paragraph("Time slot selection, online and offline booking toggle, booking confirmation flow", S["table_cell"])],
        [Paragraph("10", S["table_cell_bold"]), Paragraph("Notifications", S["table_cell_bold"]),
         Paragraph("Appointment reminder notifications via FCM, booking confirmation emails, cancellation flow", S["table_cell"])],
        [Paragraph("11", S["table_cell_bold"]), Paragraph("QA + Review", S["table_cell_bold"]),
         Paragraph("Full integration testing, admin panel additions, client review and feedback round", S["table_cell"])],
    ]
    p2_t = Table(p2_wk, colWidths=wk_cw)
    p2_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), AMBER),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, GRAY_50]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(p2_t)
    story.append(gap(10))

    story.append(Paragraph("New screens added in Phase 2", S["h2"]))
    p2_screens_data = [
        [Paragraph("User App (+8 screens)", S["table_cell_bold"]),
         Paragraph("Hospital bed search, Doctor directory, Doctor detail, Book appointment, My appointments, Notifications centre + 2 more", S["table_cell"])],
        [Paragraph("Doctor Portal (+5 screens)", S["table_cell_bold"]),
         Paragraph("Doctor login + profile setup, My availability slots, Appointments list, Patient detail view, Consultation notes", S["table_cell"])],
        [Paragraph("Admin Panel (+5 screens)", S["table_cell_bold"]),
         Paragraph("Hospital management, Bed availability editor, Doctor approvals, Appointment overview, Revenue analytics", S["table_cell"])],
    ]
    p2_st = Table(p2_screens_data, colWidths=[CONTENT_W * 0.28, CONTENT_W * 0.72])
    p2_st.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#FFFBEB")),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#FCD34D")),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(p2_st)
    story.append(gap(10))
    story.append(Paragraph("Phase 2 Infrastructure Cost (10k–30k users)", S["h2"]))
    story.append(InfraCard(
        "Phase 2 (10k–30k users)", "$120", "≈ ₹10,000/month",
        [
            ("EC2 t3.large", "Dedicated Supabase instance - 2 vCPU, 8GB", "~$60"),
            ("EC2 t3.medium", "Dedicated Express API instance", "~$30"),
            ("ElastiCache Redis t3.small", "Growing session and tracking load", "~$25"),
            ("S3 + CloudFront", "~50GB storage, moderate CDN traffic", "~$8"),
            ("SMS OTP + monitoring", "Higher login volume + CloudWatch", "~$15"),
        ],
        "Separate Supabase and Express onto dedicated instances at this scale.",
        CONTENT_W))
    story.append(PageBreak())

    # ── PAGE 6: PHASE 3, 4, 5 ──────────────────────────────────────────────────
    story.append(SectionDivider("05   PHASE 3 - CHRONIC CARE & SUBSCRIPTIONS  (Weeks 12–15)", GREEN))
    story.append(gap(8))
    story.append(Paragraph("Monthly Medicine Subscriptions + Patient Profiles", S["h1"]))
    story.append(Paragraph(
        "Phase 3 introduces recurring revenue for the client through monthly medicine subscriptions, "
        "targeting patients with chronic conditions (diabetes, hypertension, thyroid disorders). "
        "The full patient profile and medical history module is also delivered here.",
        S["body"]))
    story.append(gap(8))

    p3_data = [
        [Paragraph("Week", S["table_head"]), Paragraph("Deliverable", S["table_head"]), Paragraph("Key tasks", S["table_head"])],
        [Paragraph("12", S["table_cell_bold"]), Paragraph("Subscription model", S["table_cell_bold"]),
         Paragraph("Monthly subscription flow, Razorpay recurring billing, condition-based profiles (diabetes, BP, thyroid)", S["table_cell"])],
        [Paragraph("13", S["table_cell_bold"]), Paragraph("Auto-delivery", S["table_cell_bold"]),
         Paragraph("Auto-delivery scheduling logic, pharmacy panel: subscription orders + auto-delivery schedule screens", S["table_cell"])],
        [Paragraph("14", S["table_cell_bold"]), Paragraph("Patient profile", S["table_cell_bold"]),
         Paragraph("Full patient profile, medical history upload, prescription archive, lab report storage on S3", S["table_cell"])],
        [Paragraph("15", S["table_cell_bold"]), Paragraph("Reminders + QA", S["table_cell_bold"]),
         Paragraph("Refill reminder system via FCM, medicine reminder scheduling, admin subscription manager, QA", S["table_cell"])],
    ]
    p3_t = Table(p3_data, colWidths=wk_cw)
    p3_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), GREEN),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, GRAY_50]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(p3_t)
    story.append(gap(6))
    story.append(info_box(
        "Phase 3 adds 6 user app screens, 3 pharmacy panel screens, and 3 admin panel screens. "
        "Infra cost at 30k–60k users: ~$250/month (≈ ₹20,800) - two Express instances behind "
        "AWS ALB + t3.xlarge Supabase instance.",
        GREEN, "#F0FDF4"))
    story.append(gap(14))

    story.append(SectionDivider("06   PHASE 4 - SMART & AI FEATURES  (Weeks 16–18)", ACCENT))
    story.append(gap(8))
    story.append(Paragraph("Prescription Intelligence + Smart Health Alerts", S["h1"]))
    story.append(Paragraph(
        "Phase 4 integrates AI-powered features using the Claude API. This phase adds intelligent "
        "medicine suggestions based on prescriptions, expiry and storage alerts, and a smart "
        "health notification engine.",
        S["body"]))
    story.append(gap(8))

    p4_data = [
        [Paragraph("Week", S["table_head"]), Paragraph("Deliverable", S["table_head"]), Paragraph("Key tasks", S["table_head"])],
        [Paragraph("16", S["table_cell_bold"]), Paragraph("AI suggestions", S["table_cell_bold"]),
         Paragraph("Prescription-based medicine suggestions, doctor update alerts using Claude API integration", S["table_cell"])],
        [Paragraph("17", S["table_cell_bold"]), Paragraph("Storage guidance", S["table_cell_bold"]),
         Paragraph("Medicine storage temperature tips, expiry alert system, medicine tracker UI screens", S["table_cell"])],
        [Paragraph("18", S["table_cell_bold"]), Paragraph("Smart alerts + QA", S["table_cell_bold"]),
         Paragraph("Refill prediction engine, smart health alert configuration in admin panel, full QA pass", S["table_cell"])],
    ]
    p4_t = Table(p4_data, colWidths=wk_cw)
    p4_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), ACCENT),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, GRAY_50]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(p4_t)
    story.append(gap(14))

    story.append(SectionDivider("07   PHASE 5 - ADVANCED & SCALING  (Weeks 19–20)", PURPLE))
    story.append(gap(8))
    story.append(Paragraph("Telemedicine + AI Chat + Lab Integration", S["h1"]))
    story.append(Paragraph(
        "Phase 5 completes the platform with telemedicine video consultations, an AI health chat "
        "assistant, live blood bank tracking, and lab test booking. This phase also handles the "
        "Expo bare workflow migration required for native video SDK support.",
        S["body"]))
    story.append(gap(8))

    p5_data = [
        [Paragraph("Week", S["table_head"]), Paragraph("Deliverable", S["table_head"]), Paragraph("Key tasks", S["table_head"])],
        [Paragraph("19", S["table_cell_bold"]), Paragraph("Blood bank + Video", S["table_cell_bold"]),
         Paragraph("Live blood bank map, Expo bare workflow migration, Agora/Daily.co video integration, video call room in Doctor Portal", S["table_cell"])],
        [Paragraph("20", S["table_cell_bold"]), Paragraph("AI chat + Labs + Handover", S["table_cell_bold"]),
         Paragraph("AI health chat assistant (Claude API), lab test booking flow, lab results screen, full QA, final handover", S["table_cell"])],
    ]
    p5_t = Table(p5_data, colWidths=wk_cw)
    p5_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PURPLE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, GRAY_50]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(p5_t)
    story.append(gap(6))
    story.append(info_box(
        "At 100k+ users: migrate Postgres to AWS RDS (managed, auto-backups, failover), "
        "run 3 Express instances behind ALB, and move to Redis cluster mode. "
        "Estimated infra: ~$500+/month (≈ ₹41,500+).",
        PURPLE, "#F5F3FF"))
    story.append(PageBreak())

    # ── PAGE 7: SCREENS OVERVIEW + LEGAL ──────────────────────────────────────
    story.append(SectionDivider("08   FULL SCREEN INVENTORY BY PHASE"))
    story.append(gap(10))
    story.append(Paragraph("All Screens Across All Interfaces", S["h1"]))
    story.append(UIScreensChart(CONTENT_W))
    story.append(gap(12))

    all_screens = [
        [Paragraph("Interface", S["table_head"]), Paragraph("Phase 1", S["table_head"]),
         Paragraph("Phase 2", S["table_head"]), Paragraph("Phase 3", S["table_head"]),
         Paragraph("Phase 4", S["table_head"]), Paragraph("Phase 5", S["table_head"]),
         Paragraph("Total", S["table_head"])],
        [Paragraph("User Mobile App", S["table_cell_bold"]),
         Paragraph("12", S["table_cell"]), Paragraph("+8", S["table_cell"]),
         Paragraph("+6", S["table_cell"]), Paragraph("+4", S["table_cell"]),
         Paragraph("+5", S["table_cell"]), Paragraph("35", S["table_cell_bold"])],
        [Paragraph("Pharmacy Panel", S["table_cell_bold"]),
         Paragraph("6", S["table_cell"]), Paragraph("-", S["table_cell"]),
         Paragraph("+3", S["table_cell"]), Paragraph("-", S["table_cell"]),
         Paragraph("-", S["table_cell"]), Paragraph("9", S["table_cell_bold"])],
        [Paragraph("Admin Panel", S["table_cell_bold"]),
         Paragraph("5", S["table_cell"]), Paragraph("+5", S["table_cell"]),
         Paragraph("+3", S["table_cell"]), Paragraph("+2", S["table_cell"]),
         Paragraph("-", S["table_cell"]), Paragraph("15", S["table_cell_bold"])],
        [Paragraph("Doctor Portal", S["table_cell_bold"]),
         Paragraph("-", S["table_cell"]), Paragraph("5", S["table_cell"]),
         Paragraph("-", S["table_cell"]), Paragraph("-", S["table_cell"]),
         Paragraph("+4", S["table_cell"]), Paragraph("9", S["table_cell_bold"])],
        [Paragraph("Phase total", S["table_cell_bold"]),
         Paragraph("23", S["table_cell_bold"]), Paragraph("18", S["table_cell_bold"]),
         Paragraph("12", S["table_cell_bold"]), Paragraph("6", S["table_cell_bold"]),
         Paragraph("9", S["table_cell_bold"]), Paragraph("68", S["table_cell_bold"])],
    ]
    scr_cw = [CONTENT_W * x for x in [0.26, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12]]
    scr_t = Table(all_screens, colWidths=scr_cw)
    scr_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("BACKGROUND", (0, 5), (-1, 5), GRAY_100),
        ("ROWBACKGROUNDS", (0, 1), (-1, 4), [WHITE, GRAY_50]),
        ("FONTNAME", (0, 5), (-1, 5), "Helvetica-Bold"),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("ALIGN", (1, 0), (-1, -1), "CENTER"),
        ("ROUNDEDCORNERS", [6]),
    ]))
    story.append(scr_t)
    story.append(PageBreak())

    # ── PAGE 8: LEGAL & COMPLIANCE ─────────────────────────────────────────────
    story.append(SectionDivider("09   LEGAL & COMPLIANCE - INDIA", RED))
    story.append(gap(10))
    story.append(Paragraph("Regulatory Requirements", S["h1"]))
    story.append(Paragraph(
        "As a healthcare platform operating in India and handling sensitive patient data, "
        "the application must comply with the following regulations from day one. "
        "Non-compliance is not a future risk - it is an immediate liability.",
        S["body"]))
    story.append(gap(10))

    legal_items = [
        ("IT Act 2000 + SPDI Rules 2011",
         "Medical data is Sensitive Personal Data. Mandatory: explicit user consent before data collection, clear data usage policy, right to withdraw consent, encrypted storage. This applies from the first user onboarded.",
         "critical"),
        ("DPDP Act 2023 - Digital Personal Data Protection",
         "India's primary privacy law. Requires: purpose limitation, data minimisation, India data localisation (all health data hosted in India - hence AWS Mumbai), user deletion rights, and breach notification within 72 hours of discovery.",
         "critical"),
        ("Drugs & Cosmetics Act - E-pharmacy Rules",
         "The app does not require a drug licence. However every partner pharmacy must hold a valid licence. The platform must verify and display pharmacy licence numbers on all order confirmations. Schedule H/H1 drugs cannot be dispensed without a valid prescription.",
         "important"),
        ("Telemedicine Practice Guidelines 2020",
         "Applicable in Phase 5. All doctors on the platform must be registered with MCI/NMC. Patient consent must be recorded before video consultations. Prescriptions issued via tele-consult are valid with restrictions on Schedule H drugs.",
         "important"),
        ("ABDM / ABHA Integration - Ayushman Bharat",
         "Optional but strongly recommended. ABHA health ID integration significantly increases credibility with hospitals and government systems. Required to access hospital bed APIs from government-empanelled hospitals.",
         "strategic"),
    ]
    for item in legal_items:
        story.append(LegalItem(*item, w=CONTENT_W))
        story.append(gap(6))

    story.append(gap(8))
    story.append(Paragraph("Built-in Compliance - Day 1 Checklist", S["h2"]))
    compliance_rows = [
        [Paragraph("Requirement", S["table_head"]), Paragraph("Implementation", S["table_head"]), Paragraph("Phase", S["table_head"])],
        [Paragraph("Explicit consent screen", S["table_cell_bold"]), Paragraph("Tick boxes for data use and prescription storage at signup", S["table_cell"]), Paragraph("1", S["table_cell"])],
        [Paragraph("Encrypted prescription storage", S["table_cell_bold"]), Paragraph("AWS S3 server-side encryption + access logs + auto-delete after 3 years or on user request", S["table_cell"]), Paragraph("1", S["table_cell"])],
        [Paragraph("OTP-only authentication", S["table_cell_bold"]), Paragraph("No plain password auth for any medical data access - SMS OTP via MSG91", S["table_cell"]), Paragraph("1", S["table_cell"])],
        [Paragraph("Pharmacy licence display", S["table_cell_bold"]), Paragraph("Licence number shown on every order confirmation and pharmacy listing", S["table_cell"]), Paragraph("1", S["table_cell"])],
        [Paragraph("Emergency disclaimer", S["table_cell_bold"]), Paragraph("'Call 112 for life-threatening emergencies' on emergency contacts screen - reduces platform liability", S["table_cell"]), Paragraph("1", S["table_cell"])],
        [Paragraph("Privacy policy + ToS", S["table_cell_bold"]), Paragraph("Legally drafted documents required before App Store submission. Estimated cost: ₹5,000–10,000 one-time", S["table_cell"]), Paragraph("1", S["table_cell"])],
        [Paragraph("India data residency", S["table_cell_bold"]), Paragraph("All data hosted on AWS ap-south-1 (Mumbai) - DPDP compliant from day one", S["table_cell"]), Paragraph("1", S["table_cell"])],
    ]
    comp_cw = [CONTENT_W * x for x in [0.28, 0.60, 0.12]]
    comp_t = Table(compliance_rows, colWidths=comp_cw)
    comp_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#DC2626")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, GRAY_50]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("ALIGN", (2, 0), (2, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ROUNDEDCORNERS", [6]),
    ]))
    story.append(comp_t)
    story.append(PageBreak())

    # ── PAGE 9: INFRA COSTS + MILESTONES ──────────────────────────────────────
    story.append(SectionDivider("10   INFRASTRUCTURE COSTS BY SCALE", TEAL))
    story.append(gap(10))
    story.append(Paragraph("Monthly Infrastructure Cost at Every Scale", S["h1"]))
    story.append(Paragraph(
        "All costs are for AWS Mumbai (ap-south-1) region. Razorpay charges 2% per transaction "
        "with no monthly fee - infra costs scale with users, payment fees scale with revenue.",
        S["body"]))
    story.append(gap(10))

    infra_summary = [
        [Paragraph("Scale", S["table_head"]), Paragraph("Monthly (USD)", S["table_head"]),
         Paragraph("Monthly (INR)", S["table_head"]), Paragraph("Key infrastructure change", S["table_head"])],
        [Paragraph("0–10k users", S["table_cell_bold"]), Paragraph("~$40", S["table_cell"]),
         Paragraph("≈ ₹3,300", S["table_cell"]),
         Paragraph("Single EC2 for Supabase + Express, Redis micro, S3 basic", S["table_cell"])],
        [Paragraph("10k–30k users", S["table_cell_bold"]), Paragraph("~$120", S["table_cell"]),
         Paragraph("≈ ₹10,000", S["table_cell"]),
         Paragraph("Separate EC2 for Supabase and Express, Redis small", S["table_cell"])],
        [Paragraph("30k–60k users", S["table_cell_bold"]), Paragraph("~$250", S["table_cell"]),
         Paragraph("≈ ₹20,800", S["table_cell"]),
         Paragraph("2x Express instances behind AWS ALB, Supabase t3.xlarge, Redis medium", S["table_cell"])],
        [Paragraph("60k–100k users", S["table_cell_bold"]), Paragraph("~$350", S["table_cell"]),
         Paragraph("≈ ₹29,000", S["table_cell"]),
         Paragraph("Add Postgres read replica, 3 Express instances, WAF firewall", S["table_cell"])],
        [Paragraph("100k+ users", S["table_cell_bold"]), Paragraph("~$500+", S["table_cell"]),
         Paragraph("≈ ₹41,500+", S["table_cell"]),
         Paragraph("Migrate to AWS RDS Postgres, Redis cluster mode, 3+ Express instances", S["table_cell"])],
    ]
    infra_cw = [CONTENT_W * x for x in [0.18, 0.14, 0.14, 0.54]]
    infra_t = Table(infra_summary, colWidths=infra_cw)
    infra_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), TEAL),
        ("BACKGROUND", (0, 3), (-1, 3), colors.HexColor("#ECFDF5")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, GRAY_50]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ROUNDEDCORNERS", [6]),
    ]))
    story.append(infra_t)
    story.append(gap(6))
    story.append(info_box(
        "<b>Client recommendation:</b> Budget ₹10,000–12,000/month for infrastructure at the 30k user target. "
        "This covers all hosting, storage, CDN, cache, and push notifications. "
        "Razorpay payment fees (2%) are separate and proportional to transaction volume.",
        TEAL, "#F0FDF4"))
    story.append(gap(14))

    story.append(SectionDivider("11   PAYMENT MILESTONES"))
    story.append(gap(10))
    story.append(Paragraph("Suggested Payment Structure", S["h1"]))
    story.append(Paragraph(
        "Payments are tied to verified deliverables - not calendar dates. Each milestone "
        "is triggered by the client's acceptance of the delivered work.",
        S["body"]))
    story.append(gap(10))
    story.append(MilestoneBar(CONTENT_W))
    story.append(gap(14))

    milestone_rows = [
        [Paragraph("Milestone", S["table_head"]), Paragraph("Trigger", S["table_head"]),
         Paragraph("Deliverable", S["table_head"]), Paragraph("Payment", S["table_head"])],
        [Paragraph("Kickoff", S["table_cell_bold"]), Paragraph("Week 0 - project start", S["table_cell"]),
         Paragraph("Signed agreement, AWS setup, project structure", S["table_cell"]), Paragraph("25%", S["table_cell_bold"])],
        [Paragraph("Phase 1 Demo", S["table_cell_bold"]), Paragraph("Week 4 - working demo", S["table_cell"]),
         Paragraph("Live demo: medicine search, order flow, Razorpay working", S["table_cell"]), Paragraph("15%", S["table_cell_bold"])],
        [Paragraph("Phase 1 Live", S["table_cell_bold"]), Paragraph("Week 6 - store submission", S["table_cell"]),
         Paragraph("App submitted to App Store + Play Store, all Phase 1 features complete", S["table_cell"]), Paragraph("20%", S["table_cell_bold"])],
        [Paragraph("Phase 2 Done", S["table_cell_bold"]), Paragraph("Week 11 - client sign-off", S["table_cell"]),
         Paragraph("Hospital beds, doctor directory, appointment booking live", S["table_cell"]), Paragraph("15%", S["table_cell_bold"])],
        [Paragraph("Phase 3 Done", S["table_cell_bold"]), Paragraph("Week 15 - client sign-off", S["table_cell"]),
         Paragraph("Subscriptions, patient profiles, refill reminders live", S["table_cell"]), Paragraph("10%", S["table_cell_bold"])],
        [Paragraph("Final Handover", S["table_cell_bold"]), Paragraph("Week 20 - project complete", S["table_cell"]),
         Paragraph("All 5 phases live, code handover, documentation, 30-day support period begins", S["table_cell"]), Paragraph("15%", S["table_cell_bold"])],
    ]
    ms_cw = [CONTENT_W * x for x in [0.18, 0.22, 0.47, 0.13]]
    ms_t = Table(milestone_rows, colWidths=ms_cw)
    ms_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, GRAY_50]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("ALIGN", (3, 0), (3, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("FONTNAME", (3, 1), (3, -1), "Helvetica-Bold"),
        ("TEXTCOLOR", (3, 1), (3, -1), ACCENT),
        ("ROUNDEDCORNERS", [6]),
    ]))
    story.append(ms_t)
    story.append(PageBreak())

    # ── PAGE 10: TERMS + CLOSING ───────────────────────────────────────────────
    story.append(SectionDivider("12   TERMS, ASSUMPTIONS & NEXT STEPS", GRAY_700))
    story.append(gap(10))
    story.append(Paragraph("Project Terms & Assumptions", S["h1"]))
    story.append(gap(8))

    terms = [
        ("Scope changes", "Features or screens not listed in this proposal are out of scope. Any additions will be estimated and quoted separately before work begins."),
        ("App Store timelines", "Apple App Store review takes 1–2 weeks and is outside our control. The 6-week Phase 1 timeline accounts for submission but not for potential Apple rejections."),
        ("Client responsibilities", "Client provides: pharmacy partner details for onboarding, hospital data for bed availability, content for emergency contacts, and timely feedback within 3 business days of each demo."),
        ("Infrastructure costs", "Monthly infrastructure costs are the client's responsibility and are payable directly to AWS, Firebase, MSG91, and Razorpay. Estimates are provided in Section 10."),
        ("Legal documents", "Privacy policy and Terms of Service must be drafted by a qualified legal professional before App Store submission. Estimated one-time cost: ₹5,000–10,000."),
        ("Post-delivery support", "A 30-day bug-fix support period is included after final handover. This covers bugs in delivered features only - not new features or scope additions."),
        ("Source code ownership", "Full source code ownership transfers to the client upon receipt of final payment."),
        ("AI tool usage", "Development uses AI coding assistants (Claude Code, Cursor) to maintain quality and delivery pace. All code is reviewed, tested, and owned by the development team."),
    ]
    for title, desc in terms:
        row_data = [[Paragraph(f"<b>{title}</b>", S["body_sm"]), Paragraph(desc, S["body_sm"])]]
        rt = Table(row_data, colWidths=[CONTENT_W * 0.25, CONTENT_W * 0.75])
        rt.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (0, 0), GRAY_100),
            ("BACKGROUND", (1, 0), (1, 0), WHITE),
            ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ("LEFTPADDING", (0, 0), (-1, -1), 10),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ]))
        story.append(rt)
        story.append(gap(3))

    story.append(gap(16))
    story.append(Paragraph("Next Steps", S["h1"]))
    story.append(gap(8))

    next_steps = [
        ("Review this proposal", "Go through all phases, screens, and terms. Raise any questions or clarifications."),
        ("Align on scope", "Confirm which phases to proceed with and whether any features need adjustment."),
        ("Sign agreement", "A simple project agreement covering scope, milestones, and payment terms."),
        ("25% advance payment", "Kickoff begins immediately upon receipt of the advance."),
        ("Project kickoff call", "30-minute call to align on communication, tools, feedback process, and first-week goals."),
    ]
    for i, (step, desc) in enumerate(next_steps, 1):
        row = [[
            Paragraph(str(i), S["metric_val"]),
            Paragraph(f"<b>{step}</b><br/>{desc}", S["body_sm"])
        ]]
        nt = Table(row, colWidths=[36, CONTENT_W - 36])
        nt.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (0, 0), colors.HexColor("#EFF6FF")),
            ("BACKGROUND", (1, 0), (1, 0), WHITE),
            ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("ALIGN", (0, 0), (0, 0), "CENTER"),
        ]))
        story.append(nt)
        story.append(gap(4))

    story.append(gap(20))
    # Closing box
    closing_data = [[Paragraph(
        "<b>Ready to build something that genuinely helps people?</b><br/>"
        "This proposal reflects a realistic, well-scoped plan built on proven technology. "
        "Every decision - from the tech stack to the compliance approach - has been made "
        "with the long-term success of this platform in mind.<br/><br/>"
        "Looking forward to partnering with you on MediCare Connect.",
        S["body"])]]
    ct = Table(closing_data, colWidths=[CONTENT_W])
    ct.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, -1), WHITE),
        ("TOPPADDING", (0, 0), (-1, -1), 20),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 20),
        ("LEFTPADDING", (0, 0), (-1, -1), 24),
        ("RIGHTPADDING", (0, 0), (-1, -1), 24),
        ("ROUNDEDCORNERS", [10]),
    ]))
    # Override text color in closing
    closing_data2 = [[Paragraph(
        "<font color='white'><b>Ready to build something that genuinely helps people?</b></font><br/>"
        "<font color='#93C5FD'>This proposal reflects a realistic, well-scoped plan built on proven technology. "
        "Every decision - from the tech stack to the compliance approach - has been made "
        "with the long-term success of this platform in mind.</font><br/><br/>"
        "<font color='white'>Looking forward to partnering with you on MediCare Connect.</font>",
        S["body"])]]
    ct2 = Table(closing_data2, colWidths=[CONTENT_W])
    ct2.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("TOPPADDING", (0, 0), (-1, -1), 20),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 20),
        ("LEFTPADDING", (0, 0), (-1, -1), 24),
        ("RIGHTPADDING", (0, 0), (-1, -1), 24),
        ("ROUNDEDCORNERS", [10]),
    ]))
    story.append(ct2)

    doc.build(story, onFirstPage=lambda c, d: None, onLaterPages=header_footer)
    print(f"PDF generated successfully: {output_path}")


build_proposal()