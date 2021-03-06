<?php

namespace App\Entity;

use DateTimeImmutable;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Vich\UploaderBundle\Mapping\Annotation\UploadableField;
use ApiPlatform\Core\Annotation\ApiResource;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
#[ApiResource(
    collectionOperations: ['get'],
    itemOperations: ['get'],
)]
/**
 * @Vich\Uploadable
 */
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\Column(type: 'string', length: 255)]
    private $link;

    #[ORM\Column(type: 'text')]
    private $description;

    #[ORM\Column(type: 'string', length: 255)]
    private $imageName;
/**
 * @Vich\UploadableField(mapping="project_image", fileNameProperty="imageName")
 */
    private $imageFile;

    #[ORM\Column(type: 'array')]
    private $backEnd = [];

    #[ORM\Column(type: 'array')]
    private $frontEnd = [];

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $updatedAt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }


    public function getImageName(): ?string
    {
        return $this->imageName;
    }


    public function setImageName(?string $imageName): self
    {
        $this->imageName = $imageName;

        return $this;
    }


    public function getImageFile(): ?file
    {
        return $this->imageFile;
    }
  
/**
 * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $imageFile
 */
    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;
        if (null !== $imageFile) {
            $this->updated_at = (new DateTimeImmutable())->format('Y-m-d h-i-s');
        }
    }


    public function getUpdatedAt(): ?string
    {
        return $this->updatedAt;
    }


    public function setUpdatedAt(string $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }


    public function getBackEnd(): ?array
    {
        return $this->backEnd;
    }

    public function setBackEnd(array $backEnd): self
    {
        $this->backEnd = $backEnd;

        return $this;
    }


    public function getFrontEnd(): ?array
    {
        return $this->frontEnd;
    }


    public function setFrontEnd(array $frontEnd): self
    {
        $this->frontEnd = $frontEnd;

        return $this;
    }
}
