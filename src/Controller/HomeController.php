<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use App\Repository\SkillRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(ProjectRepository $projectRepository, SkillRepository $skillRepository): Response
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
        return $this->render('home/index.html.twig', [
            'projects' => $projects,
            'fronts' => $front,
            'backs' => $back,
            'autres' => $autres,
            'devops' => $devops,
            'softs' => $soft,


        ]);
    }
}
