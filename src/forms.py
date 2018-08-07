from django import forms

class DefaultForm(forms.Form):
    name = forms.CharField(max_length = 30)
