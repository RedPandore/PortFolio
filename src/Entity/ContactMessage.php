<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContactMessageRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ContactMessageRepository::class)]
#[ApiResource]
class ContactMessage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: false)]
    /**
     * @Assert\NotBlank(
     * message = "Ce champ ne peut pas être vide")
     */
    private $name;

    #[ORM\Column(type: 'string', length: 255, nullable: false)]
    /**
     * @Assert\NotBlank(
     * message = "Ce champ ne peut pas être vide")
     * @Assert\Email(
     *     message = "L'adresse '{{ value }}' n'est pas valide."
     * )
     */

    private $email;

    #[ORM\Column(type: 'string', length: 255, nullable: false)]
    /**
     * @Assert\NotBlank(
     * message = "Ce champ ne peut pas être vide")
     */
    private $subject;

    #[ORM\Column(type: 'text', nullable: false)]
    /**
     * @Assert\NotBlank(
     * message = "Ce champ ne peut pas être vide")
     */
    private $message;

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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): self
    {
        $this->subject = $subject;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }
}
