from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5 import uic
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        uic.loadUi("main_ui.ui", self)
        self.pbAdd.clicked.connect(self.pb_Add)

    def pb_Add(self):
        x = float(self.le_X.text())
        y = float(self.li_Y.text())
        self.resultat.setText(str(x + y))

app = QApplication(sys.argv)
window = MainWindow()
window.show()
sys.exit(app.exec_())
