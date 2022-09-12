from django.shortcuts import render,redirect
from django.http import HttpResponse
from ast import Name
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from pharmacy.models import pharmacyData
from pharmacy.serializers import pharmacySerializer
from rest_framework.decorators import api_view
from django.contrib.postgres.search import SearchQuery
@api_view(['GET', 'POST', 'DELETE'])
def pharmacy_list(request): 
   
  if request.method == 'GET':
        phrm = pharmacyData.pharmacyDataManager.all()
        phrm_serializer =pharmacySerializer(phrm, many=True)
        name = request.GET.get('username', None)
        if name is not None:
        #  phrm = phrm.filter(name__icontains=name)
         phrm = phrm.filter(name__icontains=name)
         phrm_serializer =pharmacySerializer(phrm, many=True)
        return JsonResponse(phrm_serializer.data, safe=False)
       
  elif request.method == 'DELETE':
        count = pharmacyData.pharmacyDataManager.all().delete()
        return JsonResponse({'message': '{} Deleted.'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
  elif request.method == 'POST':
        phrm_data = JSONParser().parse(request)
        phrm_serializer = pharmacySerializer(data=phrm_data)
        if phrm_serializer.is_valid():
            phrm_serializer.save()
            return JsonResponse(phrm_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(phrm_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def pharmacy_detail(request, pk):
   try:
    phrm = pharmacyData.pharmacyDataManager.get(pk=pk) 
   except pharmacyData.DoesNotExist: 
    return JsonResponse({'message': 'Does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
   if request.method == 'GET': 
        phrm_serializer = pharmacySerializer(phrm) 
        return JsonResponse(phrm_serializer.data) 
   
   elif request.method == 'PUT': 
        phrm_data = JSONParser().parse(request) 
        phrm_serializer = pharmacySerializer(phrm, data=phrm_data) 
        if phrm_serializer.is_valid(): 
            phrm_serializer.save() 
            return JsonResponse(phrm_serializer.data) 
        return JsonResponse(phrm_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

   elif request.method == 'DELETE': 
        phrm.delete() 
        return JsonResponse({'message': 'Deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
        
@api_view(['GET'])
def pharmacy_list_published(request):
    phrm = pharmacyData.pharmacyDataManager.filter(published=True)       
    if request.method == 'GET': 
        phrm_serializer = pharmacySerializer(phrm, many=True)
        return JsonResponse(phrm_serializer.data, safe=False)


def index(request):
    return render(request,'index_phrm.html')








# QUICK_SETUP DATA INIT


def co(request):
        return HttpResponse("hello")