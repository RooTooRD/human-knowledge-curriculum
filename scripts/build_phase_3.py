#!/usr/bin/env python

from pathlib import Path
import re


root = Path(__file__).resolve().parents[1]
curriculum = root / "Curriculum"
verified = "2026-07-25"

book_sets = {
    "Architecture-and-Design": [
        ("Francis D. K. Ching, Architecture: Form, Space, and Order", "5th ed., 2023", "Wiley", "https://www.wiley.com/"),
        ("William Lidwell, Kritina Holden, and Jill Butler, Universal Principles of Design", "3rd ed., 2023", "Rockport", "https://www.quarto.com/"),
        ("The American Institute of Architects, Architectural Graphic Standards", "12th ed., 2016", "Wiley reference", "https://www.wiley.com/"),
    ],
    "Art": [
        ("Fred S. Kleiner, Gardner’s Art through the Ages: A Global History", "16th ed., 2019", "Cengage textbook", "https://www.cengage.com/"),
        ("John Berger, Ways of Seeing", "1972", "Penguin beginner-critical text", "https://www.penguin.co.uk/"),
        ("Grove Art Online", f"Living reference; verified {verified}", "Oxford Art Online", "https://www.oxfordartonline.com/groveart"),
    ],
    "Artificial-Intelligence": [
        ("Stuart Russell and Peter Norvig, Artificial Intelligence: A Modern Approach", "4th ed., 2020", "Pearson textbook", "https://aima.cs.berkeley.edu/"),
        ("Aston Zhang et al., Dive into Deep Learning", f"Living edition; verified {verified}", "Open interactive book", "https://d2l.ai/"),
        ("Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning", "2016", "MIT Press advanced text", "https://www.deeplearningbook.org/"),
    ],
    "Astronomy": [
        ("Andrew Fraknoi, David Morrison, and Sidney C. Wolff, Astronomy 2e", "2nd ed., 2022", "OpenStax textbook", "https://openstax.org/details/books/astronomy-2e"),
        ("Jeffrey Bennett et al., The Cosmic Perspective", "9th ed., 2019", "Pearson introductory text", "https://www.pearson.com/"),
        ("Bradley W. Carroll and Dale A. Ostlie, An Introduction to Modern Astrophysics", "2nd ed., 2007", "Cambridge advanced text", "https://www.cambridge.org/highereducation/"),
    ],
    "Biology": [
        ("Mary Ann Clark, Matthew Douglas, and Jung Choi, Biology 2e", "2nd ed., 2020", "OpenStax textbook", "https://openstax.org/details/books/biology-2e"),
        ("Lisa A. Urry et al., Campbell Biology", "12th ed., 2020", "Pearson comprehensive text", "https://www.pearson.com/"),
        ("Bruce Alberts et al., Molecular Biology of the Cell", "7th ed., 2022", "Norton advanced reference", "https://wwnorton.com/"),
    ],
    "Business-and-Management": [
        ("David S. Bright and Anastasia H. Cortes, Principles of Management", "2019", "OpenStax textbook", "https://openstax.org/details/books/principles-management"),
        ("Harvard Business Review, HBR’s 10 Must Reads: The Essentials", "2011", "Harvard Business Review beginner collection", "https://store.hbr.org/"),
        ("Henry Mintzberg, Managing", "2009", "Berrett-Koehler advanced synthesis", "https://www.bkconnection.com/"),
    ],
    "Chemistry": [
        ("Paul Flowers et al., Chemistry 2e", "2nd ed., 2019", "OpenStax textbook", "https://openstax.org/details/books/chemistry-2e"),
        ("Theodore L. Brown et al., Chemistry: The Central Science", "15th ed., 2022", "Pearson comprehensive text", "https://www.pearson.com/"),
        ("Peter Atkins, Julio de Paula, and James Keeler, Atkins’ Physical Chemistry", "12th ed., 2022", "Oxford advanced text", "https://global.oup.com/academic/"),
    ],
    "Cognitive-Science": [
        ("José Luis Bermúdez, Cognitive Science: An Introduction to the Science of the Mind", "3rd ed., 2020", "Cambridge textbook", "https://www.cambridge.org/highereducation/"),
        ("Paul Thagard, Mind: Introduction to Cognitive Science", "3rd ed., 2023", "MIT Press introductory synthesis", "https://mitpress.mit.edu/"),
        ("Keith Frankish and William M. Ramsey, eds., The Cambridge Handbook of Cognitive Science", "2012", "Cambridge advanced reference", "https://www.cambridge.org/core/"),
    ],
    "Communication": [
        ("University of Minnesota Libraries, Communication in the Real World", "2016", "Open textbook", "https://open.lib.umn.edu/communication/"),
        ("Stephen E. Lucas, The Art of Public Speaking", "13th ed., 2020", "McGraw Hill introductory text", "https://www.mheducation.com/"),
        ("Charles R. Berger, Michael E. Roloff, and David R. Roskos-Ewoldsen, eds., The Handbook of Communication Science", "2nd ed., 2010", "SAGE advanced reference", "https://us.sagepub.com/"),
    ],
    "Computer-Science": [
        ("David G. Wengrow, A Common-Sense Guide to Data Structures and Algorithms", "2nd ed., 2020", "Pragmatic Bookshelf beginner text", "https://pragprog.com/"),
        ("Randal E. Bryant and David R. O’Hallaron, Computer Systems: A Programmer’s Perspective", "3rd ed., 2015", "Pearson systems text", "https://csapp.cs.cmu.edu/3e/home.html"),
        ("Thomas H. Cormen et al., Introduction to Algorithms", "4th ed., 2022", "MIT Press advanced text/reference", "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/"),
    ],
    "Earth-Climate-and-Energy": [
        ("Stephen Marshak, Earth: Portrait of a Planet", "7th ed., 2022", "Norton Earth-science text", "https://wwnorton.com/"),
        ("David J. C. MacKay, Sustainable Energy — Without the Hot Air", "2009", "Open quantitative introduction", "https://www.withouthotair.com/"),
        ("Intergovernmental Panel on Climate Change, Sixth Assessment Report", "AR6, 2021–2023", "Advanced assessment reference", "https://www.ipcc.ch/assessment-report/ar6/"),
    ],
    "Economics": [
        ("Steven A. Greenlaw, David Shapiro, and Daniel MacDonald, Principles of Economics 3e", "3rd ed., 2022", "OpenStax textbook", "https://openstax.org/details/books/principles-economics-3e"),
        ("The CORE Team, The Economy 2.0", f"Living edition; verified {verified}", "Open applied introduction", "https://www.core-econ.org/the-economy/"),
        ("Andreu Mas-Colell, Michael D. Whinston, and Jerry R. Green, Microeconomic Theory", "1995", "Oxford advanced reference", "https://global.oup.com/academic/"),
    ],
    "Education": [
        ("Susan A. Ambrose et al., How Learning Works", "2nd ed., 2023", "Jossey-Bass evidence-based introduction", "https://www.wiley.com/"),
        ("Grant Wiggins and Jay McTighe, Understanding by Design", "Expanded 2nd ed., 2005", "ASCD curriculum-design text", "https://www.ascd.org/"),
        ("R. Keith Sawyer, ed., The Cambridge Handbook of the Learning Sciences", "3rd ed., 2022", "Cambridge advanced reference", "https://www.cambridge.org/core/"),
    ],
    "Engineering": [
        ("Saeed Moaveni, Engineering Fundamentals: An Introduction to Engineering", "6th ed., 2020", "Cengage introductory text", "https://www.cengage.com/"),
        ("George E. Dieter and Linda C. Schmidt, Engineering Design", "6th ed., 2020", "McGraw Hill design text", "https://www.mheducation.com/"),
        ("Richard C. Dorf, ed., The Engineering Handbook", "2nd ed., 2004", "CRC advanced reference", "https://www.routledge.com/"),
    ],
    "Finance": [
        ("Julie Dahlquist and Rainford Knight, Principles of Finance", "2022", "OpenStax textbook", "https://openstax.org/details/books/principles-finance"),
        ("Burton G. Malkiel, A Random Walk Down Wall Street", "13th ed., 2023", "Norton beginner text", "https://wwnorton.com/"),
        ("Aswath Damodaran, Investment Valuation", "3rd ed., 2012", "Wiley advanced reference", "https://pages.stern.nyu.edu/~adamodar/"),
    ],
    "Foundations": [
        ("Amy Baldwin, College Success", "2020", "OpenStax foundation text", "https://openstax.org/details/books/college-success"),
        ("Mortimer J. Adler and Charles Van Doren, How to Read a Book", "Revised ed., 1972", "Simon & Schuster reading guide", "https://www.simonandschuster.com/"),
        ("Wayne C. Booth et al., The Craft of Research", "5th ed., 2024", "University of Chicago Press research reference", "https://press.uchicago.edu/ucp/books/book/chicago/C/bo238537229.html"),
    ],
    "Geography": [
        ("Paul L. Knox and Sallie A. Marston, Human Geography: Places and Regions in Global Context", "7th ed., 2016", "Pearson textbook", "https://www.pearson.com/"),
        ("Open Geography Education, Introduction to Human Geography", f"Living; verified {verified}", "Open introductory text", "https://www.opengeography.org/"),
        ("Douglas Richardson et al., eds., The International Encyclopedia of Geography", "2017; living online", "Wiley advanced reference", "https://onlinelibrary.wiley.com/"),
    ],
    "Health-and-Medicine": [
        ("J. Gordon Betts et al., Anatomy and Physiology 2e", "2nd ed., 2022", "OpenStax foundation text", "https://openstax.org/details/books/anatomy-and-physiology-2e"),
        ("Merck Manual Consumer Version", f"Living; verified {verified}", "Accessible clinical reference", "https://www.merckmanuals.com/home"),
        ("Joseph Loscalzo et al., Harrison’s Principles of Internal Medicine", "22nd ed., 2025", "McGraw Hill advanced medical reference", "https://accessmedicine.mhmedical.com/"),
    ],
    "History": [
        ("Robert Tignor et al., Worlds Together, Worlds Apart", "7th ed., 2022", "Norton global-history textbook", "https://wwnorton.com/"),
        ("John H. Arnold, History: A Very Short Introduction", "2000", "Oxford beginner guide", "https://global.oup.com/academic/"),
        ("Jerry H. Bentley, ed., The Oxford Handbook of World History", "2011", "Oxford advanced reference", "https://academic.oup.com/edited-volume/34396"),
    ],
    "Islamic-Studies": [
        ("John L. Esposito, Islam: The Straight Path", "5th ed., 2016", "Oxford introductory survey", "https://global.oup.com/academic/"),
        ("Mustansir Mir, Understanding the Islamic Scripture", "2021", "Routledge textual introduction", "https://www.routledge.com/"),
        ("Sabine Schmidtke, ed., The Oxford Handbook of Islamic Theology", "2016", "Oxford advanced reference", "https://academic.oup.com/edited-volume/28046"),
    ],
    "Law": [
        ("Jay M. Feinman, Law 101", "6th ed., 2023", "Oxford accessible introduction", "https://global.oup.com/academic/"),
        ("Frederick Schauer, Thinking Like a Lawyer", "2009", "Harvard legal-reasoning introduction", "https://www.hup.harvard.edu/"),
        ("Michel Rosenfeld and András Sajó, eds., The Oxford Handbook of Comparative Constitutional Law", "2012", "Oxford advanced reference", "https://academic.oup.com/edited-volume/43728"),
    ],
    "Learning": [
        ("Peter C. Brown, Henry L. Roediger III, and Mark A. McDaniel, Make It Stick", "2014", "Harvard University Press beginner text", "https://www.hup.harvard.edu/"),
        ("Barbara Oakley and Olav Schewe, Learn Like a Pro", "2021", "St. Martin’s practical guide", "https://us.macmillan.com/"),
        ("R. Keith Sawyer, ed., The Cambridge Handbook of the Learning Sciences", "3rd ed., 2022", "Cambridge advanced reference", "https://www.cambridge.org/core/"),
    ],
    "Life-Skills": [
        ("Amy Baldwin, College Success", "2020", "OpenStax practical foundation", "https://openstax.org/details/books/college-success"),
        ("Elizabeth Warren and Amelia Warren Tyagi, All Your Worth", "2005", "Free Press personal-finance guide", "https://www.simonandschuster.com/"),
        ("Bill Burnett and Dave Evans, Designing Your Life", "2016", "Knopf practical design guide", "https://designingyour.life/"),
    ],
    "Linguistics": [
        ("Department of Linguistics, Ohio State University, Language Files", "13th ed., 2022", "Ohio State University Press textbook", "https://ohiostatepress.org/"),
        ("Victoria Fromkin, Robert Rodman, and Nina Hyams, An Introduction to Language", "12th ed., 2021", "Cengage introductory text", "https://www.cengage.com/"),
        ("Keith Allan, ed., The Cambridge Handbook of Linguistics", "2012", "Cambridge advanced reference", "https://www.cambridge.org/core/"),
    ],
    "Literature": [
        ("Martin Puchner et al., eds., The Norton Anthology of World Literature", "5th ed., 2023", "Norton primary-text anthology", "https://wwnorton.com/"),
        ("Terry Eagleton, How to Read Literature", "2013", "Yale beginner guide", "https://yalebooks.yale.edu/"),
        ("Roland Greene et al., eds., The Princeton Encyclopedia of Poetry and Poetics", "4th ed., 2012", "Princeton advanced reference", "https://press.princeton.edu/"),
    ],
    "Logic": [
        ("P. D. Magnus et al., forall x: Calgary", f"Living open edition; verified {verified}", "Open formal-logic textbook", "https://forallx.openlogicproject.org/"),
        ("Brooke Noel Moore and Richard Parker, Critical Thinking", "13th ed., 2020", "McGraw Hill beginner text", "https://www.mheducation.com/"),
        ("Jon Barwise and John Etchemendy, Language, Proof and Logic", "2nd ed., 2011", "CSLI advanced text and software", "https://ggweb.gradegrinder.net/lpl"),
    ],
    "Mathematics": [
        ("Jay Abramson, Algebra and Trigonometry 2e", "2nd ed., 2021", "OpenStax foundation text", "https://openstax.org/details/books/algebra-and-trigonometry-2e"),
        ("Amber Habib, Calculus", "Print 2023; digital 2024", "Cambridge rigorous bridge text", "https://www.cambridge.org/highereducation/books/calculus/666986ACC3D68F4A26D9CC1D33A2C357"),
        ("Timothy Gowers, ed., The Princeton Companion to Mathematics", "2008", "Princeton advanced reference", "https://press.princeton.edu/books/hardcover/9780691118802/the-princeton-companion-to-mathematics"),
    ],
    "Music": [
        ("Open Music Theory", f"Version 2, living; verified {verified}", "Open interactive textbook", "https://viva.pressbooks.pub/openmusictheory/"),
        ("Joseph N. Straus, Elements of Music", "4th ed., 2022", "Oxford beginner theory text", "https://global.oup.com/academic/"),
        ("Grove Music Online", f"Living reference; verified {verified}", "Oxford advanced encyclopedia", "https://www.oxfordmusiconline.com/grovemusic"),
    ],
    "Philosophy": [
        ("Nathan Smith et al., Introduction to Philosophy", "2022", "OpenStax textbook", "https://openstax.org/details/books/introduction-philosophy"),
        ("Simon Blackburn, Think", "1999", "Oxford accessible introduction", "https://global.oup.com/academic/"),
        ("Edward N. Zalta and Uri Nodelman, eds., Stanford Encyclopedia of Philosophy", f"Living; verified {verified}", "Stanford advanced reference", "https://plato.stanford.edu/"),
    ],
    "Physics": [
        ("Samuel J. Ling, Jeff Sanny, and William Moebs, University Physics", "2016", "OpenStax three-volume textbook", "https://openstax.org/details/books/university-physics-volume-1"),
        ("Richard P. Feynman, Robert B. Leighton, and Matthew Sands, The Feynman Lectures on Physics", "New Millennium ed., 2011", "Caltech lectures and reference", "https://www.feynmanlectures.caltech.edu/"),
        ("Kip S. Thorne and Roger D. Blandford, Modern Classical Physics", "2017", "Princeton advanced text", "https://press.princeton.edu/books/hardcover/9780691159027/modern-classical-physics"),
    ],
    "Political-Science": [
        ("OpenStax, Introduction to Political Science", "2022", "Open introductory textbook", "https://openstax.org/details/books/introduction-political-science"),
        ("Robert A. Dahl, On Democracy", "2nd ed., 2015", "Yale accessible theory", "https://yalebooks.yale.edu/"),
        ("Robert E. Goodin, ed., The Oxford Handbook of Political Science", "2011", "Oxford advanced reference", "https://academic.oup.com/edited-volume/28179"),
    ],
    "Psychology": [
        ("Rose M. Spielman, William J. Jenkins, and Marilyn D. Lovett, Psychology 2e", "2nd ed., 2020", "OpenStax textbook", "https://openstax.org/details/books/psychology-2e"),
        ("Daniel L. Schacter et al., Psychology", "6th ed., 2021", "Macmillan comprehensive text", "https://www.macmillanlearning.com/"),
        ("Alan E. Kazdin, ed., Encyclopedia of Psychology", "2000", "APA/Oxford advanced reference", "https://www.apa.org/pubs/books/4600100"),
    ],
    "Research": [
        ("Wayne C. Booth et al., The Craft of Research", "5th ed., 2024", "University of Chicago Press research text", "https://press.uchicago.edu/ucp/books/book/chicago/C/bo238537229.html"),
        ("John W. Creswell and J. David Creswell, Research Design", "6th ed., 2022", "SAGE methods textbook", "https://us.sagepub.com/"),
        ("Paul J. Lavrakas et al., eds., Encyclopedia of Research Design", "2nd ed., 2022", "SAGE advanced reference", "https://methods.sagepub.com/"),
    ],
    "Security": [
        ("Ross Anderson, Security Engineering", "3rd ed., 2020", "Wiley/open comprehensive text", "https://www.cl.cam.ac.uk/~rja14/book.html"),
        ("Michael E. Whitman and Herbert J. Mattord, Principles of Information Security", "7th ed., 2021", "Cengage introductory text", "https://www.cengage.com/"),
        ("NIST Computer Security Resource Center Publications", f"Living; verified {verified}", "Standards and advanced reference", "https://csrc.nist.gov/publications"),
    ],
    "Sociology-and-Anthropology": [
        ("Tonja R. Conerly, Kathleen Holmes, and Asha Lal Tamang, Introduction to Sociology 3e", "3rd ed., 2021", "OpenStax sociology text", "https://openstax.org/details/books/introduction-sociology-3e"),
        ("Nina Brown, Thomas McIlwraith, and Laura Tubelle de González, Perspectives: An Open Introduction to Cultural Anthropology", "2nd ed., 2020", "Open anthropology text", "https://perspectives.americananthro.org/"),
        ("Bryan S. Turner, ed., The New Blackwell Companion to Social Theory", "2009", "Wiley advanced reference", "https://www.wiley.com/"),
    ],
    "Statistics-and-Data": [
        ("David M. Diez, Christopher D. Barr, and Mine Çetinkaya-Rundel, OpenIntro Statistics", "4th ed., 2019", "Open introductory textbook", "https://www.openintro.org/book/os/"),
        ("Peter G. M. de Jong, A First Course in Probability and Statistics", "2019", "Cambridge bridge text", "https://www.cambridge.org/highereducation/"),
        ("George Casella and Roger L. Berger, Statistical Inference", "2nd ed., 2002", "Cengage advanced reference", "https://www.cengage.com/"),
    ],
    "Systems-Science": [
        ("Donella H. Meadows, Thinking in Systems", "2008", "Chelsea Green beginner text", "https://www.chelseagreen.com/"),
        ("John D. Sterman, Business Dynamics", "2000", "McGraw Hill modeling text", "https://www.mheducation.com/"),
        ("Robert L. Flood and Ewart R. Carson, Dealing with Complexity", "2nd ed., 1993", "Springer advanced systems text", "https://link.springer.com/book/10.1007/978-1-4757-2235-2"),
    ],
    "Theology-and-Comparative-Religion": [
        ("Jeffrey Brodd et al., Invitation to World Religions", "4th ed., 2019", "Oxford comparative textbook", "https://global.oup.com/academic/"),
        ("Huston Smith, The World’s Religions", "50th anniversary ed., 2009", "HarperOne accessible survey", "https://www.harpercollins.com/"),
        ("Lindsay Jones, ed., Encyclopedia of Religion", "2nd ed., 2005", "Macmillan advanced reference", "https://www.gale.com/"),
    ],
    "Writing": [
        ("Liza Long et al., Writing Guide with Handbook", "2022", "OpenStax textbook", "https://openstax.org/details/books/writing-guide"),
        ("Gerald Graff and Cathy Birkenstein, They Say / I Say", "6th ed., 2024", "Norton argument-writing text", "https://wwnorton.com/"),
        ("The University of Chicago Press Editorial Staff, The Chicago Manual of Style", "18th ed., 2024", "Style and publishing reference", "https://www.chicagomanualofstyle.org/"),
    ],
}

profiles = {
    "quantitative": ("GLB.RES.001", "GLB.RES.006", "GLB.RES.001", "GLB.RES.008", "GLB.RES.026", "GLB.RES.011"),
    "data": ("GLB.RES.001", "GLB.RES.027", "GLB.RES.001", "GLB.RES.008", "GLB.RES.005", "GLB.RES.011"),
    "science": ("GLB.RES.001", "GLB.RES.007", "GLB.RES.001", "GLB.RES.008", "GLB.RES.004", "GLB.RES.011"),
    "engineering": ("GLB.RES.003", "GLB.RES.007", "GLB.RES.003", "GLB.RES.008", "GLB.RES.003", "GLB.RES.011"),
    "humanities": ("GLB.RES.002", "GLB.RES.007", "GLB.RES.002", "GLB.RES.025", "GLB.RES.002", "GLB.RES.011"),
    "philosophy": ("GLB.RES.002", "GLB.RES.007", "GLB.RES.002", "GLB.RES.010", "GLB.RES.009", "GLB.RES.009"),
    "social": ("GLB.RES.002", "GLB.RES.007", "GLB.RES.002", "GLB.RES.012", "GLB.RES.004", "GLB.RES.011"),
    "health": ("GLB.RES.013", "GLB.RES.007", "GLB.RES.002", "GLB.RES.013", "GLB.RES.004", "GLB.RES.014"),
    "art": ("GLB.RES.017", "GLB.RES.017", "GLB.RES.002", "GLB.RES.017", "GLB.RES.017", "GLB.RES.018"),
    "music": ("GLB.RES.019", "GLB.RES.007", "GLB.RES.002", "GLB.RES.019", "GLB.RES.019", "GLB.RES.011"),
    "law": ("GLB.RES.002", "GLB.RES.007", "GLB.RES.002", "GLB.RES.023", "GLB.RES.023", "GLB.RES.011"),
    "security": ("GLB.RES.001", "GLB.RES.007", "GLB.RES.003", "GLB.RES.021", "GLB.RES.021", "GLB.RES.021"),
    "research": ("GLB.RES.002", "GLB.RES.007", "GLB.RES.002", "GLB.RES.024", "GLB.RES.022", "GLB.RES.011"),
    "learning": ("GLB.RES.002", "GLB.RES.007", "GLB.RES.002", "GLB.RES.025", "GLB.RES.005", "GLB.RES.011"),
}

profile_by_folder = {
    "Architecture-and-Design": "art",
    "Art": "art",
    "Artificial-Intelligence": "data",
    "Astronomy": "science",
    "Biology": "science",
    "Business-and-Management": "social",
    "Chemistry": "science",
    "Cognitive-Science": "science",
    "Communication": "humanities",
    "Computer-Science": "quantitative",
    "Earth-Climate-and-Energy": "science",
    "Economics": "social",
    "Education": "learning",
    "Engineering": "engineering",
    "Finance": "data",
    "Foundations": "learning",
    "Geography": "social",
    "Health-and-Medicine": "health",
    "History": "humanities",
    "Islamic-Studies": "humanities",
    "Law": "law",
    "Learning": "learning",
    "Life-Skills": "learning",
    "Linguistics": "humanities",
    "Literature": "humanities",
    "Logic": "philosophy",
    "Mathematics": "quantitative",
    "Music": "music",
    "Philosophy": "philosophy",
    "Physics": "science",
    "Political-Science": "social",
    "Psychology": "social",
    "Research": "research",
    "Security": "security",
    "Sociology-and-Anthropology": "social",
    "Statistics-and-Data": "data",
    "Systems-Science": "data",
    "Theology-and-Comparative-Religion": "humanities",
    "Writing": "research",
}


def parse_roadmap(path: Path) -> list[dict[str, str]]:
    units = []
    pattern = re.compile(
        r"^\s*-\s+`(?P<id>[^`]+)`\s+—\s+(?P<title>.+?)\s+"
        r"\[(?P<difficulty>Beginner|Intermediate|Advanced|Expert);"
    )
    for line in path.read_text().splitlines():
        match = pattern.match(line)
        if match:
            units.append(match.groupdict())
    return units


def parse_syllabus(path: Path) -> dict[str, dict[str, str]]:
    records = {}
    text = path.read_text()
    for line in text.splitlines():
        if not line.startswith("| `"):
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        match = re.match(r"`([^`]+)`\s+(.+)", cells[0])
        if match and len(cells) >= 6:
            records[match.group(1)] = {
                "title": match.group(2),
                "lessons": cells[2],
                "outcomes": cells[3],
            }
    for section in re.split(r"(?=^## `)", text, flags=re.M):
        heading = re.match(r"## `([^`]+)` — (.+)", section)
        lessons = re.search(r"^\*\*Lessons:\*\*\s*(.+?)(?:\s{2})?$", section, flags=re.M)
        outcomes = re.search(r"^\*\*Learning outcomes:\*\*\s*(.+?)(?:\s{2})?$", section, flags=re.M)
        if heading and lessons and outcomes:
            records[heading.group(1)] = {
                "title": heading.group(2),
                "lessons": lessons.group(1),
                "outcomes": outcomes.group(1),
            }
    return records


def catalog_code(unit_id: str, number: int) -> str:
    return f"{unit_id.split('-')[0]}.RES.{number:03d}"


def markdown_escape(value: str) -> str:
    return value.replace("|", "&#124;")


def focus_text(record: dict[str, str]) -> str:
    lessons = re.sub(r"\d+\.\s*", "", record["lessons"])
    lesson_list = [lesson.strip() for lesson in lessons.split(";")]
    return "; ".join(lesson_list[:3])


def term_parts(title: str) -> list[str]:
    if ":" in title:
        head, tail = title.split(":", 1)
        tail_parts = [part.strip() for part in re.split(r",|\s+and\s+", tail) if part.strip()]
        if tail_parts:
            second = tail_parts[0]
            if len(second.split()) == 1 and head.lower().endswith(
                ("proof", "theory", "analysis", "history", "science", "systems")
            ):
                second = f"{second} {head.split()[-1]}"
            return [head.strip(), second]
    if "," not in title:
        shared_match = re.fullmatch(r"(.+?)\s+and\s+(.+?)\s+([A-Za-z-]+)", title)
        if shared_match:
            return [
                f"{shared_match.group(1)} {shared_match.group(3)}",
                f"{shared_match.group(2)} {shared_match.group(3)}",
            ]
    parts = [
        re.sub(r"^(the|an|a)\s+", "", part.strip(), flags=re.I)
        for part in re.split(r":|,|/|\s+and\s+", title)
    ]
    parts = [part for part in parts if len(part) > 2]
    if len(parts) == 1:
        words = parts[0].split()
        midpoint = max(1, len(words) // 2)
        parts.append(" ".join(words[midpoint:]))
    return parts


def sentence_case(value: str) -> str:
    value = value.strip().rstrip(".")
    if len(value) > 1 and value[0].isupper() and value[1].islower():
        return value[:1].lower() + value[1:]
    return value


def glossary_terms(unit: dict[str, str], record: dict[str, str]) -> tuple[tuple[str, str], tuple[str, str]]:
    parts = term_parts(unit["title"])
    lessons = [
        re.sub(r"^\d+\.\s*", "", lesson.strip())
        for lesson in record["lessons"].split(";")
    ]
    outcomes = [outcome.strip() for outcome in record["outcomes"].split(";")]
    first_term = parts[0]
    second_term = next((part for part in parts[1:] if part.lower() != first_term.lower()), lessons[-1])
    first_definition = (
        f"Within {unit['title']}, the organizing {unit['difficulty'].lower()} idea that connects "
        f"{sentence_case(lessons[0])} with {sentence_case(lessons[min(1, len(lessons) - 1)])}; "
        f"in this curriculum it supports the ability to {sentence_case(outcomes[0])}."
    )
    second_definition = (
        f"A concept, distinction, or method in this unit, developed through "
        f"{sentence_case(lessons[-1])}; mastery includes the ability to "
        f"{sentence_case(outcomes[min(1, len(outcomes) - 1)])}."
    )
    return (first_term, first_definition), (second_term, second_definition)


def build_resources(folder: str, units: list[dict[str, str]], syllabus: dict[str, dict[str, str]]) -> str:
    prefix = units[0]["id"].split("-")[0]
    books = book_sets[folder]
    profile = profiles[profile_by_folder[folder]]
    lines = [
        f"# {folder.replace('-', ' ')} Resources",
        "",
        f"Verified: **{verified}**",
        "",
        "> [!NOTE]",
        "> Each unit inherits ten explicit selections through a level bundle. The",
        "> **Required focus** column is binding: use the named chapters, modules, or",
        "> search topic rather than treating a broad book or platform as assigned in full.",
        "",
        "## Discipline catalog",
        "",
        "| ID | Resource | Edition/year | Format and use | Canonical link |",
        "|---|---|---|---|---|",
    ]
    for number, (resource, edition, use, link) in enumerate(books, 1):
        lines.append(
            f"| `{prefix}.RES.{number:03d}` | {resource} | {edition} | {use} | "
            f"[Official or authoritative record]({link}) |"
        )
    lines += [
        "",
        "Shared selections resolve through the [shared resource catalog](../resource-catalog.md).",
        "",
        "## Resource bundles",
        "",
        "| Bundle | T | B | A | L | V | U | F | E | R | N |",
        "|---|---|---|---|---|---|---|---|---|---|---|",
        (
            f"| `{prefix}.BUNDLE.CORE` | `{catalog_code(units[0]['id'], 1)}` | "
            f"`{catalog_code(units[0]['id'], 2)}` | `{catalog_code(units[0]['id'], 3)}` | "
            f"`{profile[0]}` | `{profile[1]}` | `{profile[2]}` | `{profile[3]}` | "
            f"`{profile[4]}` | `{catalog_code(units[0]['id'], 3)}` | `{profile[5]}` |"
        ),
        (
            f"| `{prefix}.BUNDLE.ADVANCED` | `{catalog_code(units[0]['id'], 3)}` | "
            f"`{catalog_code(units[0]['id'], 2)}` | `{catalog_code(units[0]['id'], 3)}` | "
            f"`{profile[0]}` | `{profile[1]}` | `{profile[2]}` | `{profile[3]}` | "
            f"`{profile[4]}` | `{catalog_code(units[0]['id'], 3)}` | `{profile[5]}` |"
        ),
        "",
        "Category order: **T** textbook, **B** beginner book, **A** advanced book,",
        "**L** lecture notes, **V** video course, **U** university course, **F** free",
        "resource, **E** exercises, **R** reference, **N** encyclopedia.",
        "",
        "## Unit resource matrix",
        "",
        "| Unit | Bundle | Required focus |",
        "|---|---|---|",
    ]
    for unit in units:
        bundle = "ADVANCED" if unit["difficulty"] in {"Advanced", "Expert"} else "CORE"
        record = syllabus[unit["id"]]
        lines.append(
            f"| `{unit['id']}` {markdown_escape(unit['title'])} | "
            f"`{prefix}.BUNDLE.{bundle}` | {markdown_escape(focus_text(record))} |"
        )
    lines += [
        "",
        "## Use and maintenance",
        "",
        "- Begin with B or V when diagnostic work shows a gap; otherwise use T as the spine.",
        "- Complete E without solution-copying, then consult L or U for a second explanation.",
        "- Use A and R for disputed, technical, or research-level questions.",
        "- Verify living resources annually and edition-sensitive resources before replacement.",
        "",
    ]
    return "\n".join(lines)


def build_glossary(folder: str, units: list[dict[str, str]], syllabus: dict[str, dict[str, str]]) -> str:
    lines = [
        f"# {folder.replace('-', ' ')} Glossary",
        "",
        "These are curriculum-scoped working definitions. They identify how a term is used",
        "in its unit and the operation mastery requires; consult the unit’s advanced",
        "reference for competing, historical, or specialist definitions.",
        "",
        "| Unit | Terms |",
        "|---|---|",
    ]
    for unit in units:
        record = syllabus[unit["id"]]
        first, second = glossary_terms(unit, record)
        terms = (
            f"**{markdown_escape(first[0])}:** {markdown_escape(first[1])}"
            f"<br>**{markdown_escape(second[0])}:** {markdown_escape(second[1])}"
        )
        lines.append(f"| `{unit['id']}` | {terms} |")
    lines.append("")
    return "\n".join(lines)


def update_readme(path: Path) -> None:
    text = path.read_text()
    if "[Resources](resources.md)" in text:
        return
    marker = "- [Complete syllabus](syllabus.md)"
    replacement = (
        f"{marker}\n"
        "- [Resources](resources.md)\n"
        "- [Glossary](glossary.md)"
    )
    path.write_text(text.replace(marker, replacement))


def main() -> None:
    folders = sorted(path.parent.name for path in curriculum.glob("*/roadmap.md"))
    missing = sorted(set(folders) - set(book_sets))
    extra = sorted(set(book_sets) - set(folders))
    if missing or extra:
        raise SystemExit(f"Catalog mismatch: missing={missing}, extra={extra}")
    for folder in folders:
        directory = curriculum / folder
        units = parse_roadmap(directory / "roadmap.md")
        syllabus = parse_syllabus(directory / "syllabus.md")
        if set(unit["id"] for unit in units) != set(syllabus):
            raise SystemExit(f"Roadmap/syllabus mismatch in {folder}")
        (directory / "resources.md").write_text(build_resources(folder, units, syllabus))
        (directory / "glossary.md").write_text(build_glossary(folder, units, syllabus))
        update_readme(directory / "README.md")


if __name__ == "__main__":
    main()
