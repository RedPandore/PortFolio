<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Repository\SkillRepository;
use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GameController extends AbstractController
{
    #[Route('/game', name: 'game')]
    public function index(ProjectRepository $projectRepository, SkillRepository $skillRepository, UserRepository $userRepository): Response
    {  
         $projects = $projectRepository->findAll();
        $skills = $skillRepository->findAll();
        $front =  array_filter($skills, function ($skill) {
            return $skill->getCategorie() === 'frontEnd';
        });
        $back =  array_filter($skills, function ($skill) {
            return $skill->getCategorie() === 'backEnd';
        });
        $autres =  array_filter($skills, function ($skill) {
            return $skill->getCategorie() === 'Autres';
        });
        $devops =  array_filter($skills, function ($skill) {
            return $skill->getCategorie() === 'devOps';
        });
        $soft =  array_filter($skills, function ($skill) {
            return $skill->getCategorie() === 'Soft Skill';
        });
        $profil =  array_filter($skills, function ($skill) {
            return $skill->getCategorie() === 'Profil';
        });

        $tennessee = $userRepository->findBy(['firstname' => 'Tennessee']);
    
        return $this->render('game/index.html.twig', [
            'projects' => $projects,
            'fronts' => $front,
            'backs' => $back,
            'autres' => $autres,
            'devops' => $devops,
            'softs' => $soft,
            'tennessee' => $tennessee,
            'profils' => $profil,


        ]);
    }
        
    
}
