from django.shortcuts import render
from django.http import JsonResponse
from .forms import DefaultForm

#Renders Home Page
def render_home(request):
    form = DefaultForm()

    return render(request, 'hello.html', {'form': form})

#Used to receive name input from user and returns it as JSON
def receive_name(request):
    print('oi')
    if request.method == 'POST':
        name = request.POST.get('name')

        response = {}
        response['name'] = name

        return JsonResponse(response)
