from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication


def isPremier(x):
    True
    
def Play():
    windows.pbAnnuler.setText("Salam")
    
app = QApplication([])
windows = loadUi ("login.ui")
windows.show()
windows.pbOk.clicked.connect ( Play )
app.exec_()