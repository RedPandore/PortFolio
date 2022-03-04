<?php

namespace App\Controller\Admin;

use App\Entity\Project;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ProjectCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Project::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
            TextField::new('link'),
            CollectionField::new('backEnd'),
            CollectionField::new('frontEnd'),
            TextField::new('description'),
            ImageField::new('imageName')
            ->setBasePath('/uploads/images/')
            ->hideOnForm(),
            TextareaField::new(propertyName: 'imageFile', label:'Image Project')
            ->setFormType(VichImageType::class)
            ->onlyOnForms(),
        ];
    }
    
}
