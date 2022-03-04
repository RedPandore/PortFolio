<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BasicPortfolioController extends AbstractController
{
    #[Route('/{reactRouting}', name: 'basic', defaults: ["reactRouting" => null], priority: -1)]
        public function index(): Response
    {
        return $this->render('basic_portfolio/index.html.twig');
    }
}
