from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
'''
# backend/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import LoginForm, BookingForm
from .models import User, Booking
from django.http import JsonResponse 

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('index')  # Redirect to your index page or any other page
            else:
                return render(request, 'login.html', {'form': form, 'error': 'Invalid credentials'})
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})


def booking_view(request):
     if request.method == 'POST':
         form = BookingForm(request.POST)
         if form.is_valid():
             # You might need to get the logged-in user to associate with the booking
             # Assuming you have user authentication implemented
             if request.user.is_authenticated:
                 booking = form.save(commit=False) # Don't save yet
                 booking.customer = request.user # Assign logged-in user as the customer
                 booking.save() # Now save to database
                 return JsonResponse({'message': 'Booking created successfully'}) # Optionally return success
             else:
                 return JsonResponse({'error': 'User is not authenticated'}, status=401)
         else:
             return JsonResponse({'errors': form.errors}, status=400)
     else:
         form = BookingForm()
     return render(request, 'booking1.html', {'form': form})'''