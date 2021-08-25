from django.shortcuts import render, redirect
from .models import *
  #GET
def index(request):
    context = {
        "Usuario" : "Daisy"
    }
    return redirect('/shows')

def verlistashows(request): #tvshows es la variable y contiene el show.objects.all()
    context = {
        'TVShows': Show.objects.all(), 
        
    }
    return render(request, 'verlistashows.html', context)

def agregar(request): #GET
    context = {
        "Usuario" : "Dai"
    }
    return render(request, 'agregar.html', context)

def editar(request,id): #el editar recibe una id
    context = {
        'id' : id,
    }
    return render(request, 'editar.html', context)

def mostrar(request,id):
    
    show_by_id = Show.objects.get(id=id)
    print("Mostrando: ", show_by_id)
    context = {
        'show' : show_by_id,
    }

    return render(request, 'mostrar.html', context)


def borrar(request,id):
    context = {
        "id" : id,
    }
    return render(request, 'borrar.html', context)

def update(request,id):
    context= {
        "show" : Show.objects.get(id=id)
    }
    
    return render(request, 'editar.html', context)



#POST request
def crear(request):
    print(request.POST)
    show = Show.objects.create(
        title=request.POST.get('title'),
        network=request.POST.get('network'),
        release_date=request.POST.get('release_date'),
        desc=request.POST.get('description'),
        
    )
    return redirect(f"/shows/{show.id}")



def edit(request):
    print(request.POST)
    if request.method == 'POST':
        print(request.POST)
        id_show = request.POST['id_show']
        show = Show.objects.get(id=id_show)
        print("Vamos a actualizar")
        show.title = request.POST['title']
        show.network = request.POST['network']
        show.desc = request.POST['desc']
        show.save()
        return redirect(f'/shows/{id_show}')

def destroy(request, id):
    show_by_id = Show.objects.get(id=id)
    print("Borrando: ", show_by_id)
    show_by_id.delete()
    return redirect('/shows')


